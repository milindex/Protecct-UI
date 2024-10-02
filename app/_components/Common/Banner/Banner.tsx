"use client";
import styles from "./Banner.module.scss";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import Slide from "./parts/Slide/Slide";

const Banner = ({ type = "default" }) => {
  const bannerSlides = [
    {
      img: "/assets/images/Banner/industrial-1.jpg",
      alt: "Contribute to the future of industrial safety",
      heading: "Contribute to the future of industrial safety",
      description: "Join us in advancing workplace safety with innovative solutions tailored for the industrial sector.",
      link: "/contact-us",
      cta: "Let's talk",
    },
    {
      img: "/assets/images/Banner/industrial-2.jpg",
      alt: "Safety Consulting Solutions",
      heading: "Safety Consulting Solutions",
      description: "Comprehensive safety consulting services to ensure your business meets regulatory requirements and promotes worker well-being.",
      link: "/services",
      cta: "Our Services",
    },
    {
      img: "/assets/images/Banner/industrial-3.jpg",
      alt: "Helping to protect lives at the workplace",
      heading: "Helping to protect lives at the workplace",
      description: "We are committed to creating safer work environments, helping protect employees from hazards.",
      link: "/about-us",
      cta: "Learn more",
    },
    {
      img: "/assets/images/Banner/industrial-4.jpg",
      alt: "Need Safety Expertise - Short Term?",
      heading: "Need Safety Expertise - Short Term?",
      description: "Leverage our expert consultants for short-term safety needs, ensuring continuity in workplace safety.",
      link: "/contact-us",
      cta: "Let's talk",
    },
    {
      img: "/assets/images/Banner/industrial-5.jpg",
      alt: "Safety Audit & Training",
      heading: "Safety Audit & Training",
      description: "We offer tailored safety audits and training programs to help your business maintain a safe work environment.",
      link: "/services",
      cta: "Check our services",
    },
    {
      img: "/assets/images/Banner/industrial-6.jpg",
      alt: "We strive for 100% client satisfaction.",
      heading: "We strive for 100% client satisfaction.",
      description: "Our commitment to exceptional service ensures that every client receives top-tier safety solutions.",
      link: "/clients",
      cta: "Take a look",
    },
  ];

  return (
    <>
      {bannerSlides && bannerSlides.length > 0 && (
        <div className={styles.bannerContainer}>
          <Carousel height="calc(100vh - 92px)" withControls={false} withIndicators={false} draggable={true} loop={true}>
            {bannerSlides.map((slide, index) => (
              <Carousel.Slide>
                <Slide key={index} slideData={slide} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};
export default Banner;
