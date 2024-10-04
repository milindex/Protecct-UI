"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./StatsDisplay.module.scss";

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ endValue, duration = 2, label }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [displayNumber, setDisplayNumber] = React.useState(0);
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      let startTime = Date.now();
      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);

        if (progress === 1) {
          setDisplayNumber(endValue);
          clearInterval(timer);
        } else {
          // Easing function for smoother animation
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayNumber(Math.round(easedProgress * endValue));
        }
      }, 16);

      controls.start({ opacity: 1, y: 0 });

      return () => clearInterval(timer);
    }
  }, [inView, endValue, duration, controls]);

  return (
    <motion.div ref={ref} className={styles.animatedCounter} initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.6, ease: "easeOut" }}>
      <motion.div className={styles.value}>
        {displayNumber}
        <span className={styles.plus}>+</span>
      </motion.div>
      <motion.div className={styles.label} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        {label}
      </motion.div>
    </motion.div>
  );
};

interface StatsDisplayProps {
  value: number;
  label: string;
  pill?: { text: string; color: string };
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ value, label, pill }) => {
  return (
    <div className={styles.StatsDisplay}>
      {pill && (
        <div className={styles.pill}>
          <span>{pill.text}</span>
        </div>
      )}
      <AnimatedCounter endValue={value} label={label} />
    </div>
  );
};

export default StatsDisplay;
