"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { isAuthenticated } = useKindeAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white">My Blog</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 md:bg-transparent md:flex-row flex flex-col items-center space-y-4 md:space-y-0 md:space-x-6 z-50`}
        >
          <Link
            className="text-white font-semibold hover:bg-blue-700 py-2 px-4 rounded-md transition duration-300"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-white font-semibold hover:bg-blue-700 py-2 px-4 rounded-md transition duration-300"
            href="/Blogs"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                className="text-white font-semibold hover:bg-blue-700 py-2 px-4 rounded-md transition duration-300"
                href="/Profile"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <LogoutLink
                className="text-white font-semibold hover:bg-blue-700 py-2 px-4 rounded-md transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign out
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink
                className="text-white font-semibold hover:bg-blue-700 py-2 px-4 rounded-md transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </LoginLink>
              <RegisterLink
                className="text-white font-semibold hover:bg-blue-700 py-2 px-4 rounded-md transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </RegisterLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
