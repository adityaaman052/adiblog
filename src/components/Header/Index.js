"use client";

import Link from "next/link";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={cx(
      "fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white/10 dark:bg-black/20 backdrop-blur-lg shadow-md border border-white/20 dark:border-black/30 rounded-xl py-4 px-6 flex items-center justify-between z-50",
      mode === "light" ? "text-black" : "text-white"
    )}>  
      {/* Logo */}
      <Logo />
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 font-medium text-lg">
        <Link href="/" className="hover:text-primary transition-all">Home</Link>
        <Link href="/about" className="hover:text-primary transition-all">About</Link>
        <Link href="/contact" className="hover:text-primary transition-all">Contact</Link>
      </nav>
      
      {/* Theme Switcher & Socials */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-8 h-8 flex items-center justify-center rounded-full transition-all shadow-lg",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? <MoonIcon className="w-5 h-5 fill-dark" /> : <SunIcon className="w-5 h-5 fill-dark" />}
        </button>
        <div className="flex space-x-3">
          <a href={siteMetadata.linkedin} className="hover:scale-110 transition-all" target="_blank" aria-label="LinkedIn">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href={siteMetadata.twitter} className="hover:scale-110 transition-all" target="_blank" aria-label="Twitter">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href={siteMetadata.github} className="hover:scale-110 transition-all" target="_blank" aria-label="GitHub">
            <GithubIcon className="w-6 h-6 dark:fill-light" />
          </a>
          <a href={siteMetadata.dribbble} className="hover:scale-110 transition-all" target="_blank" aria-label="Dribbble">
            <DribbbleIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <div className="relative w-8 h-6 flex flex-col justify-between transition-all">
          <span className={cx("block h-1 bg-dark dark:bg-light transition-all", menuOpen ? "rotate-45 translate-y-2.5" : "")}></span>
          <span className={cx("block h-1 bg-dark dark:bg-light transition-all", menuOpen ? "opacity-0" : "")}></span>
          <span className={cx("block h-1 bg-dark dark:bg-light transition-all", menuOpen ? "-rotate-45 -translate-y-2.5" : "")}></span>
        </div>
      </button>
      
      {/* Mobile Nav */}
      <nav
        className={cx(
          "fixed top-0 left-0 w-full h-screen bg-white/80 dark:bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-xl font-semibold transition-all duration-300",
          menuOpen ? "translate-y-0" : "-translate-y-full",
          mode === "light" ? "text-black" : "text-white"
        )}
      >
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-8 h-8 flex items-center justify-center rounded-full transition-all shadow-lg mt-4",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? <MoonIcon className="w-5 h-5 fill-dark" /> : <SunIcon className="w-5 h-5 fill-dark" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
