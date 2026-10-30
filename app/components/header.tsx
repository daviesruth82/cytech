
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full h-[80px] bg-white font-sans relative z-50 px-3 sm:px-5 md:px-8 lg:px-10">

      <div className="w-full h-full flex items-center justify-between gap-2 sm:gap-4">

        {/* Logo */}
        <h1 className="text-rose-700 text-2xl sm:text-3xl md:text-4xl font-bold font-mono shrink-0">
          Cytech
        </h1>

      

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link href="/" className="text-black hover:text-blue-500">Home</Link>
          <Link href="/Contact" className="text-black hover:text-blue-500">Contact</Link>
          <Link href="/About" className="text-black hover:text-blue-500">About Us</Link>
          <Link href="/Blog" className="text-black hover:text-blue-500">Blog</Link>
        </nav>

        {/* Desktop Sign Up */}
      <Link
  href="/signup"
  className="hidden lg:block bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-black transition duration-300"
>
  Sign Up
</Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black text-2xl sm:text-3xl shrink-0"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-3 sm:right-5 w-[200px] sm:w-[230px] bg-white shadow-xl border border-gray-200 rounded-lg lg:hidden flex flex-col items-center gap-5 py-5">

          <nav className="flex flex-col items-center gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-500">Home</Link>
            <Link href="/Contact" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-500">Contact</Link>
            <Link href="/About" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-500">About Us</Link>
            <Link href="/Blog" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-500">Blog</Link>
          </nav>

     <Link href="/signup"> <button className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-black transition duration-300">
            Sign Up
            </button>
          </Link>

        </div>
      )}

    </section>
  );
}
