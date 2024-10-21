"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex space-x-4">
        <ul className="list-disc pl-2">
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>VueJS</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Node.js</li>
          <li>Express</li>
          <li>Java</li>
          <li>Asp.Net Core</li>
          <li>PHP</li>
        </ul>
        <ul className="list-disc pl-4">
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Microsoft SQL</li>
          <li>Firebase</li>
          <li>Git</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>UBT - University for Business and Technology, Kosovo</li>
        <li className="list-none" style={{ textDecoration: "none" }}>
          <p>Computer Science & Engineering</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          BIT Academy - Youth Online and Upward <br />
          ReactJS Advanced
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full  text-gray-200">
          <h2 className="text-4xl font-bold w-fit mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#80CBC4] to-[#FFF9E6]">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-5">
            I am a Software Developer with a strong focus on both front-end and
            back-end technologies. I specialize in creating interactive,
            responsive, and dynamic web applications using modern frameworks and
            tools.
          </p>
          <p className="text-base md:text-lg leading-5">
            My expertise spans across
            <b> ReactJS, NextJS, JavaScript, TypeScript </b>
            and <b>VueJS</b> on the front-end, while on the back-end I work with
            technologies like{" "}
            <b>
              NodeJS, ExpressJS, Java, Asp.Net Core (Entity Framework and MS
              SQL)
            </b>
            and <b>PHP</b>. In addition to my core web development skills, I am
            experienced in database management using{" "}
            <b>MongoDB, MySQL, Microsoft SQL, and Firebase</b>. I am proficient
            in <b>Git</b> and experienced with <b>WordPress</b> for content
            management.
          </p>
          <p className="text-base md:text-lg leading-5">
            A quick learner, I am always eager to grow my skills and thrive in
            collaborative environments to create innovative web applications.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
