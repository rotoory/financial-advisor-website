import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          FinAdvisor
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-blue-200 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-200 transition duration-300">Services</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200 transition duration-300">About</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-200 transition duration-300">Blog</Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 mt-4 rounded-md shadow-lg">
          <ul className="flex flex-col space-y-3 px-4 py-3">
            <li>
              <Link href="/" className="block hover:text-blue-200 transition duration-300" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/services" className="block hover:text-blue-200 transition duration-300" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-blue-200 transition duration-300" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/blog" className="block hover:text-blue-200 transition duration-300" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
