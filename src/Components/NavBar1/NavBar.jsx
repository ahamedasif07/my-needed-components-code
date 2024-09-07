"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "./Card";
// import Header from "./Header";
import Drawer from "./Drawer";
import Button from "./Button";
import "./Navbar.css";
import "./Responsive.css";
import Image from "next/image";

import logo from "@/app/Assets/Navbar/LOGO.png";
import profile from "@/app/Assets/Navbar/profile.svg";
import { FaLongArrowAltRight, FaRegUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const accessToken = Cookies.get("accessToken");

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className={`${isFixed ? "fixed " : ""} navbar border-2`}>
          <navbar className="flex items-center justify-between  max-w-screen-xl mx-auto  ">
            {/* <!-- logo --> */}
            <div className="md:w-3/12">
              <Link href="/" className="flex items-center">
                <div className="logo-bg ">
                  <Image
                    src={logo}
                    width={70}
                    height={40}
                    className=""
                    alt="Mr.Friends"
                  />
                </div>
              </Link>
            </div>

            {/* -----------------  All Link ---------------> */}
            <div className=" profile-container w-9/12 flex justify-end items-center">
              <ul className="all-link-container items-center hidden md:flex">
                <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
                  <Link className="navar-text uppercase Navbar-font" href="/">
                    Home
                  </Link>
                </li>
                <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
                  <Link
                    className="navar-text uppercase Navbar-font"
                    href="/notices"
                  >
                    Notices
                  </Link>
                </li>
                <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
                  <Link
                    className="navar-text uppercase Navbar-font"
                    href="/ourCourses"
                  >
                    Our Courses
                  </Link>
                </li>

                <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer ms-3 me-5">
                  <Link
                    className="navar-text uppercase Navbar-font"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="link-text wrapper met-3 ">
                  <Link
                    Link
                    className=" link-text text-center py-[6px] ARCHITECTURAL"
                    href="/unitech-architctural"
                  >
                    <span className="flex items-center justify-center uppercase gap-1 ">
                      UNITECH ARCHITECTURAL
                    </span>
                  </Link>
                </li>
                <li className="link-text wrapper me-2 ">
                  {isClient && !accessToken && (
                    <Link
                      Link
                      className="login-button link-text text-center py-[6px]"
                      href="/login"
                    >
                      <span className="flex items-center justify-center uppercase gap-1">
                        Login{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
                          width="12"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </span>
                    </Link>
                  )}
                </li>
                <li className="link-text wrapper  ">
                  {isClient && accessToken && (
                    <Link
                      Link
                      className="login-button bg-white border-2 rounded-lg link-text text-center py-[6px]"
                      href="/profile"
                    >
                      <span className="flex items-center justify-center uppercase gap-1">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 448 512"
                          >
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                          </svg>
                        </div>
                      </span>
                    </Link>
                  )}
                </li>
              </ul>

              <div className="Menubar">
                {/* ------- open & close button ---- */}
                <Button setIsOpen={setIsOpen} isOpen={isOpen} />

                {/* ----- drower container body ------- */}
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                  <Card
                    isClient={isClient}
                    accessToken={accessToken}
                    setIsOpen={setIsOpen}
                  />
                </Drawer>
              </div>
            </div>
          </navbar>
        </div>
      </div>
    </>
  );
};
