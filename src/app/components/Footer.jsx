import React from "react";

const Footer = () => {
  return (
    <footer className="footer  z-10  ">
      <div className=" w-full h-[1.5px] text-transparent  bg-gradient-to-r from-[#80CBC4] to-[#FFF9E6]"></div>
      <div className="container p-8 flex justify-center">
        <h3 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#80CBC4] to-[#FFF9E6] text-center">
          © {new Date().getFullYear()} All rights reserved!
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
