import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <img
                 src={profileImage}
                 alt="Profile"
                 className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a Software Developer with a passion for building efficient, scalable, and user-friendly applications. 
              I have experience working with modern technologies such as React, Angular, NestJS, Spring Boot, and RESTful APIs, and
               I enjoy solving complex problems by turning them into clean and maintainable solutions. I focus on writing quality code, 
               following best practices, and continuously improving my technical skills through real-world projects.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
             When I’m not coding, I explore new technologies, work on personal projects, and strengthen my problem-solving 
             abilities to grow as a better software engineer.
            </p>

            
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
