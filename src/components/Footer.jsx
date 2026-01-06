import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/rinshamol" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rinsha-mol-k-s/",
    },
    { name: "Email", icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=rinshamolks65@gmail.com" },
   
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Rinsha Mol K S</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Software Developer
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Rinsha Mol K S Software Developer | Building scalable & meaningful applications.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
