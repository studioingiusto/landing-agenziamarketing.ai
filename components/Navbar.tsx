"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="border-b border-[#ffffff15] py-4 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="flex items-center justify-between gap-12">
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="font-title text-white text-xl font-medium scroll-smooth"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              agenziamarketing.ai
            </Link>
            <Link
              href="#come-funziona"
              className="text-white/80 hover:text-white flex items-center gap-1 text-[15px] scroll-smooth"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Come funziona
            </Link>
            <Link
              href="#perche"
              className="text-white/80 hover:text-white text-[15px] scroll-smooth"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('perche')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Perché
            </Link>
            <Link
              href="#prima-dopo"
              className="text-white/80 hover:text-white flex items-center gap-1 text-[15px] scroll-smooth"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('prima-dopo')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Prima e dopo
            </Link>
          </nav>
          <Link
            href="#form"
            className="bg-white text-[#2a193c] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors font-title shadow-[0_4px_20px_rgba(255,255,255,0.3)] scroll-smooth"
            scroll={false}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Prova ora
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
