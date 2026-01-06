import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiKotlin,
  SiReact,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFirebase,
  SiSwagger,
  SiLinux,
} from "react-icons/si";

import { FaJava, FaSwift, FaAndroid } from "react-icons/fa";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "Kotlin", icon: SiKotlin },
      { name: "SwiftUI", icon: FaSwift },
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "Jetpack Compose", icon: FaAndroid },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Firebase", icon: SiFirebase },
      { name: "Swagger", icon: SiSwagger },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <skill.icon className="text-4xl text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
