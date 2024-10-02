import React from "react";
import Image from "next/image";
import styles from "./Slide.module.scss";
import Link from "next/link";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

interface SlideProps {
  slideData: {
    img: string;
    alt: string;
    heading: string;
    link: string;
    cta: string;
    description: string;
  };
}

const Slide: React.FC<SlideProps> = ({ slideData }) => {
  const heading = slideData.heading;
  const splitHeading = heading.split(" ");
  const lastWord = splitHeading.pop();
  const startingWords = splitHeading.join(" ");

  return (
    <div className={styles.bannerSlide} style={{ backgroundImage: `url(${slideData.img})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          {startingWords}{" "}
          <span className={styles.lastword}>
            {lastWord}
            <span className={styles.overlay}></span>
          </span>
        </h2>
        <p className={styles.description}>{slideData.description}</p>
        <div className={styles.ctaContainer}>
          <Link href={slideData.link}>
            <Button rightSection={<IconArrowRight size={18} />} className={styles.cta} size="xl" radius="xl" color="tomato.7">
              {slideData.cta}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Slide;
