"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="md:py-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal h-28 sm:h-auto font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80CBC4] to-[#FFF9E6]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Fjolla", 1000, "Software Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Focused on delivering user-friendly web applications, with a passion
            for bringing a dynamic blend of creativity and technical expertise
            to every project.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#8081cb] to-[#80cba8] hover:bg-slate-200 text-[#141c17]"
            >
              Contact Me
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/cv/FjollaAliu_CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#8081cb] to-[#80cba8] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#141c17] hover:bg-transparent hover:text-black rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] border-4 border-[#6A9C89] lg:h-[400px] relative bg-gradient-to-br from-[#8081cb] to-[#80cba8]">
            <Image
              src="/images/myimage.png"
              alt="hero image"
              className="rounded-full w-full h-full object-cover relative"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
