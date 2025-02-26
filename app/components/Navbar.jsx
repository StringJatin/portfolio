'use client'

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-4 sm:px-8 bg-white dark:bg-gray-900">
      <div className="font-bold text-xl">Jatin Chouhan</div>

      {/* Hamburger Menu Icon */}
      <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center space-x-6">
        <ThemeToggle />
        <Link href="/" className="hover:text-emerald-500 transition">Home</Link>
        <Link href="#experience" className="hover:text-emerald-500 transition">Experience</Link>
        <Link href="#skills" className="hover:text-emerald-500 transition">Skills</Link>
        <Link href="#projects" className="hover:text-emerald-500 transition">Projects</Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <ThemeToggle />
          <Link href="/" className="hover:text-emerald-500 transition" onClick={toggleMenu}>Home</Link>
          <Link href="#experience" className="hover:text-emerald-500 transition" onClick={toggleMenu}>Experience</Link>
          <Link href="#skills" className="hover:text-emerald-500 transition" onClick={toggleMenu}>Skills</Link>
          <Link href="#projects" className="hover:text-emerald-500 transition" onClick={toggleMenu}>Projects</Link>
        </div>
      </div>
    </nav>
  );
}