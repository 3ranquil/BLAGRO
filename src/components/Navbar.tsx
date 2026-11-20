"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-md py-3 border-b border-zinc-200/80 dark:border-zinc-800"
          : "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm py-4 border-b border-zinc-100 dark:border-zinc-800/60 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center space-x-2.5 sm:space-x-3 group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-200 dark:shadow-emerald-950 group-hover:scale-105 transition-transform duration-300">
            <i className="fas fa-leaf text-base sm:text-lg"></i>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl tracking-tight text-zinc-900 dark:text-white leading-tight">
              BL AGRO{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                INTEGRATED
              </span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-zinc-400 dark:text-zinc-500 hidden xs:inline-block">
              Global Ltd
            </span>
          </div>
        </Link>

        {/* Desktop & iPad Pro (lg+) Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium text-sm text-zinc-600 dark:text-zinc-300">
          <Link
            href="#home"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
          >
            Home
          </Link>
          <Link
            href="#products"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
          >
            Agro Commodities
          </Link>
          <Link
            href="#minerals"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
          >
            Solid Minerals
          </Link>
          <Link
            href="#management"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
          >
            Management
          </Link>
          {/* <Link
            href="/invoice"
            className="text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200/80 dark:border-emerald-800/60 px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition flex items-center gap-1.5"
          >
            <i className="fas fa-file-invoice-dollar text-emerald-600 dark:text-emerald-400"></i>
            Invoice Portal
          </Link> */}
          <Link
            href="#contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition hover:-translate-y-0.5 active:translate-y-0 text-xs uppercase tracking-wider"
          >
            Get Started
          </Link>
          <ThemeToggle />
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center space-x-3">
          <Link
            href="/invoice"
            className="text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1"
          >
            <i className="fas fa-file-invoice-dollar text-emerald-600"></i>
            Invoices
          </Link>
          <Link
            href="#contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-1.5 rounded-lg text-xs transition"
          >
            Contact
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-700 dark:text-zinc-300 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none transition"
            aria-label="Toggle navigation menu"
          >
            <i
              className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-lg`}
            ></i>
          </button>
        </div>

        {/* Mobile Header Icons (< 768px) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          {/* <Link
            href="/invoice"
            className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 p-2 rounded-xl text-xs font-bold flex items-center justify-center w-9 h-9"
            title="Invoice Portal"
          >
            <i className="fas fa-file-invoice-dollar"></i>
          </Link> */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-800 dark:text-zinc-200 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none transition w-9 h-9 flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <i
              className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-lg`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-zinc-900/98 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 space-y-4 shadow-xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 border-b border-zinc-100 dark:border-zinc-800">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-emerald-600 transition"
            >
              <i className="fas fa-home w-6 text-zinc-400"></i> Home
            </Link>
            <Link
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-emerald-600 transition"
            >
              <i className="fas fa-seedling w-6 text-zinc-400"></i> Agro
              Commodities
            </Link>
            <Link
              href="#minerals"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-emerald-600 transition"
            >
              <i className="fas fa-gem w-6 text-zinc-400"></i> Solid Minerals
            </Link>
            <Link
              href="#management"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-emerald-600 transition"
            >
              <i className="fas fa-users w-6 text-zinc-400"></i> Corporate
              Leadership
            </Link>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href="/invoice"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-3 px-4 rounded-xl text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 font-bold text-center text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 transition flex items-center justify-center gap-2"
            >
              <i className="fas fa-file-invoice-dollar text-emerald-600"></i>{" "}
              Launch Invoice Portal
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-3 px-4 rounded-xl text-white bg-emerald-600 font-bold text-center text-sm shadow-md shadow-emerald-700/20 hover:bg-emerald-700 transition"
            >
              Contact Sales Desk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
