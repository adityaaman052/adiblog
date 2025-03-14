"use client";
import React, { useState } from "react";
import { GithubIcon, LinkedinIcon, XIcon } from "../Icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      setEmail(""); // Clear input field
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <footer className="mt-16 p-8 text-white rounded-xl bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg">
      {/* Title */}
      <h3 className="text-3xl font-bold text-center">Let's Connect!</h3>
      <p className="mt-2 text-center text-gray-300">
        Provide your email, and I will get back to you for sure!
      </p>

      {/* Subscription Form */}
      <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 text-black rounded-l-lg focus:outline-none w-64"
          required
        />
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-3 rounded-r-lg transition-all"
        >
          Submit
        </button>
      </form>

      {/* Message Display */}
      {message && <p className="mt-2 text-center text-green-400">{message}</p>}

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://github.com/adityaaman052"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all"
        >
          <GithubIcon className="w-7 h-7 fill-gray-300 hover:fill-white" />
        </a>
        <a
          href="https://x.com/AdityaAman25065?t=v-UdjChcd6zBq01yYthGbg&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all"
        >
          <LinkedinIcon className="w-7 h-7 fill-gray-300 hover:fill-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-aman-120a73281/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all"
        >
          <XIcon className="w-7 h-7 fill-gray-300 hover:fill-white" />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Aditya Aman. All rights reserved.</p>
        <p className="mt-2">
          Made with ❤️ by{" "}
          <span className="text-white font-semibold">Aditya Aman</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
