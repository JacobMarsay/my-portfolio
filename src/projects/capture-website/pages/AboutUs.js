import About from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

function AboutUs() {
  return (
    <motion.div
      exit="exit"
      varient={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <About />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
