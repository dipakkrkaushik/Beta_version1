// app/components/HeroMotion.ts
import { Variants, Transition, Easing } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// fadeIn function
export const fadeIn = (
  direction: Direction = "up",
  type: "tween" | "spring" = "tween",
  delay = 0,
  duration = 0.5
): Variants => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "up":
      y = 20;
      break;
    case "down":
      y = -20;
      break;
    case "left":
      x = 20;
      break;
    case "right":
      x = -20;
      break;
  }

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};
