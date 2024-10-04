"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.scss";
import Banner from "@/app/_components/Common/Banner/Banner";
import SectionAbout from "./parts/SectionAbout/SectionAbout";
import SectionServices from "./parts/SectionServices/SectionServices";
import SectionBenifits from "./parts/SectionBenifits/SectionBenifits";
import SectionProcess from "./parts/SectionProcess/SectionProcess";
import SectionCustomers from "./parts/SectionCustomers/SectionCustomers";
import SectionCustomerSupport from "./parts/SectionCustomerSupport/SectionCustomerSupport";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// Higher-Order Component for Motion
const MotionSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants}>
      {children}
    </motion.div>
  );
};

// Components Array to avoid repetition
const sections = [
  { component: SectionAbout },
  { component: SectionBenifits },
  { component: SectionServices },
  { component: SectionProcess },
  { component: SectionCustomers },
  { component: SectionCustomerSupport },
];

const Home = () => {
  return (
    <div className="container">
      <Banner type="home" />
      {sections.map(({ component: Component }, index) => (
        <MotionSection key={index}>
          <Component />
        </MotionSection>
      ))}
    </div>
  );
};

export default Home;
