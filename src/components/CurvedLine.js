import { motion } from "framer-motion";

const CurvedLine = () => {
  return (
    <motion.svg
      width="400px"
      height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <motion.path
  
        d="M 100 0 Q 60 20 50 0"
        stroke="#088F8F"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1, delay: 7 }}
        style={{  zIndex: -1 }}
      />
    </motion.svg>
  );
};

export default CurvedLine;