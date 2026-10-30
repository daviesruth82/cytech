"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-black text-white px-6 md:px-10 pt-12 pb-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Company Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Cytech</h2>
          <p className="text-gray-400 text-sm leading-7 max-w-sm">
            We are a leading technology company specializing in innovative solutions.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li>Email: info@cytech.com</li>
            <li>Address: 100 Computer Village, Lagos, Nigeria</li>
            <li>Phone: +234 567 2954</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/About" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/Contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/Blog" className="hover:text-white transition">Blog</Link></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © {currentYear} Cytech. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
