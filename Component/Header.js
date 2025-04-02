import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-black text-white py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Brand Name */}
        
        <Link to="home" smooth={true} duration={500} className="cursor-pointer  hover:text-blue-400 transition duration-300">
        <h1 className="text-xl font-bold">Naveen Kumar</h1>
        
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.link} 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col bg-black text-white w-full text-center py-4 absolute top-full left-0 shadow-lg">
          {menuItems.map((item, index) => (
            <li key={index} className="py-2">

              <Link 
                to={item.link} 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

// Navigation Links Data
const menuItems = [
 
  { name: "About", link: "about" },
  { name: "Achivements", link: "achivement" },
 { name: "Judging", link: "judging" },
 { name: "Publications", link: "publications" },
  { name: "Books", link: "book" },
  { name: "Blogs", link: "blogs" },
  { name: "Assessor", link: "asseors" },
  { name: "Media Coverage", link: "media" },
  { name: "Contact", link: "contact" },
  // Add nav data here
];

export default Header;

