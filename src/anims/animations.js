export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 1,
    },
  },
};

export const animImage = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const slideContainer = {
  hidden: { x: 100 },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      staggerChildren: 1,
      when: "afterChildren",
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      staggerChildren: 1,
      when: "beforeChildren",
    },
  },
};

export const lineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: { duration: 2 },
  },
};

export const sliderAnimContainer = {
  show: {
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

export const sliderAnim = {
  hidden: { x: "-200%", skew: "40deg" },
  show: {
    x: "100%",
    skew: " 0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const scaleSection = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const navMenuVarient = {
  shrink: { fontSize: '1.6rem' },
  normal: { fontSize: '1.8rem' },
}

export const navMenuSize = {
  normal: {height: '16vh'},
  shrink: {height: '12vh'},
}

export const wrapperVariants = {
  initial: { clipPath: "circle(30% at 50% 50%)" },
  expanded: { clipPath: "circle(150% at 50% 50%)" },
};
