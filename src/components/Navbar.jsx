import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/umaklogo.png";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [alumniAccordion, setAlumniAccordion] = useState(false);
  const [contactiAccordion, setContactAccordion] = useState(false);
  const [alumniHovered, setAlumniHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mobileNavRef.current &&
      menuButtonRef.current &&
      !mobileNavRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setMobileOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 719) {
      setMobileOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-[100] flex h-14 w-full items-center justify-between px-4 text-white duration-300 ease-in md:px-8 ${
          isScrolled || mobileOpen ? "bg-umakdarkblue" : "bg-transparent"
        }`}
      >
        <div>
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" className="size-11" />
              <h1 className="text-nowrap font-marcellus text-2xl">
                University of Makati
              </h1>
            </div>
          </Link>
        </div>
        <div className="relative flex items-center font-metropolis">
          <nav className="relative mr-8 hidden items-center text-sm font-semibold uppercase md:flex">
            <div
              className=""
              onMouseEnter={() => setAlumniHovered(true)}
              onMouseLeave={() => setAlumniHovered(false)}
            >
              <Link to="/" className="px-4 py-4 hover:text-blue-300">
                Alumni
              </Link>
              <div
                className={`absolute left-0 top-full flex flex-col overflow-hidden text-nowrap bg-umakdarkblue text-xs font-medium duration-300 ease-in-out ${
                  alumniHovered
                    ? "max-h-96 border-x border-b border-white"
                    : "max-h-0"
                }`}
              >
                <Link to="/featured" className="px-4 py-3 hover:bg-blue-900">
                  Featured Alumni
                </Link>
                <Link
                  to="/alumnitracking"
                  className="px-4 py-3 hover:bg-blue-900"
                >
                  Alumni Tracking Form
                </Link>
              </div>
            </div>
            <Link to="/news" className="px-4 py-4 hover:text-blue-300">
              News
            </Link>
            <Link to="/about" className="px-4 py-4 hover:text-blue-300">
              About
            </Link>
            <div
              className=""
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
            >
              <Link to="/contact" className="px-4 py-4 hover:text-blue-300">
                Contact
              </Link>
              <div
                className={`absolute right-0 top-full flex flex-col overflow-hidden text-nowrap bg-umakdarkblue text-xs font-medium duration-300 ease-in-out ${
                  contactHovered
                    ? "max-h-96 border-x border-b border-white"
                    : "max-h-0"
                }`}
              >
                <Link to="/feedback" className="px-4 py-3 hover:bg-blue-900">
                  Feedback
                </Link>
              </div>
            </div>
          </nav>
          <div className="absolute right-0 z-[100] flex items-center space-x-2">
            <FaSearch size={20} className="hover:text-blue-300" />
            <div ref={menuButtonRef} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <IoClose size={32} className="hover:text-blue-300 md:hidden" />
              ) : (
                <IoMenu size={32} className="hover:text-blue-300 md:hidden" />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* mobile nav */}
      <nav
        ref={mobileNavRef}
        className={`fixed right-0 top-0 z-[99] flex h-screen w-72 flex-col justify-start overflow-hidden bg-umaklightblue pt-14 text-sm font-medium text-white duration-500 ease-in-out ${
          mobileOpen ? "max-w-full" : "max-w-0"
        }`}
      >
        <div className="flex flex-col">
          <button
            onClick={() => setAlumniAccordion(!alumniAccordion)}
            className="flex w-full items-center justify-between px-4 py-4 text-left hover:bg-blue-900"
          >
            Alumni
            <FaChevronDown
              className={`transform duration-300 ${alumniAccordion ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          <div
            className={`flex flex-col overflow-hidden bg-umakdarkblue duration-300 ease-in-out ${
              alumniAccordion ? "max-h-full" : "max-h-0"
            }`}
          >
            <Link to="/" className="py-4 pl-10 pr-4 hover:bg-blue-900">
              Alumni
            </Link>
            <Link to="/featured" className="py-4 pl-10 pr-4 hover:bg-blue-900">
              Featured Alumni
            </Link>
            <Link
              to="/alumnitracking"
              className="py-4 pl-10 pr-4 hover:bg-blue-900"
            >
              Alumni Tracking
            </Link>
          </div>
        </div>
        <Link to="/news" className="px-4 py-4 hover:bg-blue-900">
          News
        </Link>
        <Link to="/about" className="px-4 py-4 hover:bg-blue-900">
          About
        </Link>
        <div className="flex flex-col">
          <button
            onClick={() => setContactAccordion(!contactiAccordion)}
            className="flex w-full items-center justify-between px-4 py-4 text-left hover:bg-blue-900"
          >
            Contact
            <FaChevronDown
              className={`transform duration-300 ${contactiAccordion ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          <div
            className={`flex flex-col overflow-hidden bg-umakdarkblue duration-300 ease-in-out ${
              contactiAccordion ? "max-h-full" : "max-h-0"
            }`}
          >
            <Link to="/feedback" className="py-4 pl-10 pr-4 hover:bg-blue-900">
              Feedback
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
