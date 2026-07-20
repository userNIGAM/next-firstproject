"use client"; // if you use client-side interactivity (e.g., hamburger toggle)

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-6xl mx-auto mb-6">
      <nav className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-100/50 px-6 py-4 md:px-8 md:py-4 transition-all duration-300">
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-800 group-hover:from-purple-700 group-hover:to-purple-900 transition-all duration-200">
              DevStore
            </span>
            <span className="hidden sm:inline text-xs font-semibold text-purple-400 bg-purple-100/50 px-2 py-0.5 rounded-full border border-purple-200/30">
              v2.0
            </span>
          </Link>

          {/* Desktop Navigation (hidden on small screens) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right side: Search + User actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-white/90 rounded-full border border-purple-100/50 px-3 py-1.5 shadow-sm">
              <i className="fa-regular fa-magnifying-glass text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-32 lg:w-40 ml-2"
              />
            </div>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm font-semibold rounded-full shadow-md shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <i className="fa-regular fa-user" />
              Sign In
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center p-2 text-purple-600 hover:text-purple-800 transition-colors"
            aria-label="Toggle menu"
          >
            <i
              className={`fa-regular ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}
            />
          </button>
        </div>

        {/* Mobile Menu (collapsible) */}
        <div
          className={`md:hidden mt-4 pt-4 border-t border-purple-100/60 ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex-1 flex items-center bg-white/90 rounded-full border border-purple-100/50 px-3 py-1.5 shadow-sm">
                <i className="fa-regular fa-magnifying-glass text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full ml-2"
                />
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm font-semibold rounded-full shadow-md shadow-purple-500/30"
              >
                <i className="fa-regular fa-user" />
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
