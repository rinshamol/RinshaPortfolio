import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RepoLens | AI Repository Analyzer",
      description:
        "A full-stack AI-powered GitHub repository analyzer. Paste any repo URL to get instant insights into code quality, tech stack, security risks, and improvement suggestions. Supports GitHub OAuth for private repository access.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Spring Boot",
        "Java",
        "Docker",
        "OpenRouter AI",
        "GitHub OAuth",
        "Render",
        "Vercel",
      ],
      github: "https://github.com/rinshamol/repo-lens-frontent",
      live: "https://repo-lens-frontent.vercel.app",
    },
    {
      title: "Recipe Finder App",
      description:
        "A responsive React-based recipe finder that lets users search, explore, and view detailed cooking instructions, ingredients, and nutritional info using real-time Spoonacular API data.",
      technologies: [
        "React",
        "Vite",
        "JavaScript (ES6+)",
        "CSS Modules",
        "Spoonacular API",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/rinshamol/RecipeApp",
      live: "https://recipe-app-one-liard.vercel.app/",
    },
    {
      title: "Quotes App | SwiftUI",
      description:
        "A SwiftUI iOS app built with MVVM architecture that displays inspirational quotes. Users can browse random quotes, view author names, and toggle favorites with a heart icon.",
      technologies: ["SwiftUI", "Swift", "MVVM", "iOS", "Xcode"],
      github: "https://github.com/rinshamol/QuotesApp---SwiftUI",
    },
    {
      title: "My Contacts App",
      description:
        "A full-stack contacts management app with a Kotlin Android frontend built using Jetpack Compose and a Node.js/Express backend. Features JWT authentication, contact CRUD operations, and a modern single-activity Compose UI with navigation.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Android",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST API",
        "Coil",
      ],
      github: "https://github.com/rinshamol/MyContactsApp-Frontend",
    },
    {
      title: "BookHeaven | SwiftUI",
      description:
        "An iOS app for managing a personal book collection built with SwiftUI. Users can add, view, and delete books with smooth hierarchical navigation, declarative UI, and SwiftUI state management.",
      technologies: ["SwiftUI", "Swift", "MVVM", "iOS", "Xcode"],
      github: "https://github.com/rinshamol/BookHeaven--SwiftUI",
    },
    {
      title: "NestJS REST API",
      description:
        "A RESTful API built with NestJS and PostgreSQL using TypeORM. Features user and customer CRUD operations, DTO-based input validation with class-validator, modular architecture with dependency injection, and Jest testing setup.",
      technologies: [
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "Node.js",
        "Jest",
        "REST API",
      ],
      github: "https://github.com/rinshamol/nest-sample-project",
    },
    {
      title: "Note Taking App | Android",
      description:
        "An Android note-taking app built with Kotlin and Firebase Firestore for cloud storage. Users can create, view, edit, and delete notes with a Material Design 3 UI, RecyclerView list, and real-time Firestore sync.",
      technologies: [
        "Kotlin",
        "Android",
        "Firebase Firestore",
        "RecyclerView",
        "Material Design 3",
      ],
      github:
        "https://github.com/rinshamol/Android-Note-Taking-App-using-Firebase",
    },
    {
      title: "Food Delivery App | Android",
      description:
        "An Android food delivery app built with Kotlin and Firebase. Features phone number and OTP authentication, a home dashboard, menu browsing with RecyclerView, and real-time data management with Cloud Firestore.",
      technologies: [
        "Kotlin",
        "Android",
        "Firebase Authentication",
        "Cloud Firestore",
        "RecyclerView",
        "XML Layouts",
      ],
      github: "https://github.com/rinshamol/Food-Delivery-App-",
    },
    {
      title: "Daily Dose | Medication Reminder App",
      description:
        "An Android app built with Expo and React Native for tracking daily medications. Features biometric authentication (Face ID/Touch ID), push notification reminders, animated UI components, and local persistent storage.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo Router",
        "AsyncStorage",
        "Expo Notifications",
        "Biometric Auth",
        "Android",
      ],
      github: "https://github.com/rinshamol/daily-dose",
    },
    {
      title: "Payment Collection System",
      description:
        "A full-stack payment collection system with a React Native Expo frontend and a Node.js/Express backend. Features customer loan management, payment processing, and transaction history. The mobile app supports light/dark mode and cross-platform deployment, while the backend uses PostgreSQL with connection pooling and parameterized queries for SQL injection prevention.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Axios",
        "React Native Paper",
        "Expo Router",
        "REST API",
      ],
      github: "https://github.com/rinshamol/payment-collection-frontend",
    },
    {
      title: "Product Management App",
      description:
        "A lightweight React and Vite web app for managing products with full CRUD operations — add, edit, delete, and search products. Built to practice React fundamentals including functional components, hooks, and CSS modules.",
      technologies: ["React", "JavaScript", "Vite", "CSS Modules", "ESLint"],
      github: "https://github.com/rinshamol/product-app",
    },
    {
      title: "Task Management System | SwiftUI",
      description:
        "An iOS task management app built with SwiftUI and MVVM architecture. Users can create, edit, complete, and search tasks with a clean form-based UI and reactive data flow using @Published and @ObservedObject.",
      technologies: ["SwiftUI", "Swift", "MVVM", "iOS", "Xcode"],
      github:
        "https://github.com/rinshamol/Task-Management-system-using-swiftUI",
    },
    {
      title: "City Explorer | SwiftUI",
      description:
        "An iOS app that showcases famous Indian locations with a scrollable list and detail views. Built with SwiftUI's declarative syntax, NavigationLink for smooth navigation, and the Identifiable protocol for clean data binding.",
      technologies: ["SwiftUI", "Swift", "iOS", "Xcode"],
      github: "https://github.com/rinshamol/City-Explorer----SwiftUI",
    },
    {
      title: "Recipe Finder | SwiftUI",
      description:
        "An iOS app that fetches recipes from the Spoonacular API based on ingredients. Features ingredient-based search, favorites, async image loading, and a clean MVVM architecture with Combine for reactive state management.",
      technologies: [
        "SwiftUI",
        "Swift",
        "Combine",
        "MVVM",
        "REST API",
        "Spoonacular API",
        "iOS",
        "Xcode",
      ],
      github: "https://github.com/rinshamol/Receipe-Finder-SwiftUI",
    },
    {
      title: "Dropbox Clone",
      description:
        "A static front-end clone of Dropbox built with HTML, CSS, and JavaScript, replicating the core UI and layout of the Dropbox interface.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
      github: "https://github.com/rinshamol/Static-Dropbox",
      live: "https://r1-dropbo-clone.netlify.app",
    },
    {
      title: "User Management API",
      description:
        "A RESTful User Management API built with ASP.NET Core Web API demonstrating CRUD operations, input validation, global exception handling middleware, request logging, and Swagger UI documentation. Uses Entity Framework Core with an in-memory database.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "Entity Framework Core",
        "Swagger",
        "REST API",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/rinshamol/UserManagement",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
