import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#80CBC4] to-[#FFF9E6] ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5  bg-[#80CBC4] mt-1 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
