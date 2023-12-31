"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Next.js Imports
import Image from "next/image";

// Images and Icons
import logo from "@/public/dwwnld.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  // const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav
      className={`py-4 w-full ${
        isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"
      }`}
    >
      <div className="w-[89%] m-auto flex justify-between items-center  max-w-[1400px]">
        <a href="/">
          <Image src={logo} width={250} height={250} alt="explore logo" />
        </a>

        <ul
          className={`md:flex items-center gap-8 md:static absolute text-md font-semibold text-gray-600  ${
            openMobileMenu
              ? "top-16 py-10 w-full bg-secondary left-0 text-center space-y-10 text-white drop-shadow-lg z-20"
              : "hidden"
          }`}
        >
          <li>
            <a
              href="#features"
              className="hover:text-sky-700"
              onClick={() => setOpenMobileMenu(false)}
            >
              Career Metrics
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-sky-700"
              onClick={() => setOpenMobileMenu(false)}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-sky-700"
              onClick={() => setOpenMobileMenu(false)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/survey"
              className="hover:text-sky-700"
              onClick={() => setOpenMobileMenu(false)}
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
          <Link href={"/sign-in"}>
            <button>Login</button>
          </Link>
          <Link href={"/sign-up"}>
            <button>Register</button>
          </Link>
          {/* CLERK USER BUTTON */}
        {/* {!isSignedIn ? (
            <div>
              <Link href={"/sign-in"}>
                <button>Logout</button>
              </Link>
            </div>
          ) : (
            <div>
              <Link href={"/sign-in"}>
                <AiOutlineUser size={25} />
              </Link>
            </div>
          )}
        </div> */}

        <div className="md:hidden ml-4" onClick={handleMobileMenu}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
