import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a <strong>Senior Software Engineer</strong> with over <strong>5 years of professional experience</strong>, having worked with reputed companies in the <strong>travel, delivery, and restaurant</strong> domains. My expertise spans across <strong>Java, TypeScript, Spring Boot, React, and React Native</strong>, allowing me to build <strong>high-performance enterprise applications</strong>.
        <br /><br />
        <strong>What I Do Best:</strong>
        <ul className='list-disc pl-5'>
          <li><strong>Microservice Development</strong> – Designing scalable and efficient architectures.</li>
          <li><strong>Enterprise Application Development</strong> – Building robust solutions for complex business needs.</li>
          <li><strong>Data Migration</strong> – Seamless data transitions with minimal downtime.</li>
          <li><strong>Agile & Scrum Methodologies</strong> – Driving rapid and iterative development.</li>
        </ul>
        <br />
        I am committed to <strong>continuous learning</strong>, staying up-to-date with the latest <strong>technology trends and AI-driven development methodologies</strong>. With a strong problem-solving mindset and a passion for efficiency, I leverage <strong>AI tools</strong> to optimize development time and deliver cutting-edge solutions.
        <br /><br />
        Let’s innovate and build the future together! 🚀
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
