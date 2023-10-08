import React from "react";

const Footer = () => {
  return (
    <footer className="p-2 md:p-3 text-baseDark mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          © 2023 BRAND
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-baseDark">
            Privacy Policy
          </a>
          <a href="#" className="text-baseDark">
            Terms of Services
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
