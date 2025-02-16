// Navbar.js for Next.js
import React from 'react';
import '@/styles/Navbar.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">3K</Link>
      </div>
      <div className="navbar-right">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="mailto:example@gmail.com">
          <FaEnvelope size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// Place this component in `src/components/Navbar.js` and import it into your Next.js pages. Also, update `Navbar.css` for styling.
