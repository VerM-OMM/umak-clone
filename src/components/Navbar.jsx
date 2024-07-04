import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/umaklogo.png";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
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
    if (window.innerWidth > 768) {
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
        className={`${
          isScrolled ? "bg-umakdarkblue" : "bg-transparent"
        } h-14 flex justify-between items-center px-8 text-white transition-all duration-300 fixed w-full top-0 z-50`}
      >
        <div>
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" className="size-11" />
              <h1 className="text-2xl font-marcellus">University of Makati</h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center relative font-metropolis">
          <nav className="hidden md:flex items-center uppercase text-sm font-semibold mr-8 relative">
            <div
              className=""
              onMouseEnter={() => setAlumniHovered(true)}
              onMouseLeave={() => setAlumniHovered(false)}
            >
              <Link to="/" className="px-4 py-4 hover:text-blue-300">
                Alumni
              </Link>
              <div
                className={`absolute font-medium top-full left-0 text-nowrap text-xs bg-umakdarkblue flex flex-col overflow-hidden duration-300 ease-in-out ${
                  alumniHovered
                    ? "max-h-96 border-white border-b border-x"
                    : "max-h-0"
                }`}
              >
                <Link to="/featured" className="px-4 py-2 hover:bg-blue-900">
                  Featured Alumni
                </Link>
                <Link
                  to="/alumnitracking"
                  className="px-4 py-2 hover:bg-blue-900"
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
              <Link to="/" className="px-4 py-4 hover:text-blue-300">
                Contact
              </Link>
              <div
                className={`absolute top-full font-medium right-0 text-nowrap text-xs bg-umakdarkblue flex flex-col overflow-hidden duration-300 ease-in-out ${
                  contactHovered
                    ? "max-h-96 border-white border-b border-x"
                    : "max-h-0"
                }`}
              >
                <Link to="/" className="px-4 py-2 hover:bg-blue-900">
                  Feedback
                </Link>
              </div>
            </div>
          </nav>
          <div className="flex items-center space-x-2 absolute right-0 z-[100]">
            <FaSearch size={20} className="hover:text-blue-300" />
            <div ref={menuButtonRef} onClick={() => setMobileOpen(!mobileOpen)}>
              <IoMenu size={32} className="hover:text-blue-300 md:hidden" />
            </div>
          </div>
        </div>
      </header>

      {/* mobile nav */}
      <nav
        ref={mobileNavRef}
        className={`fixed top-0 right-0 h-screen text-white bg-umaklightblue flex flex-col pt-14 w-[300px] justify-start duration-500 ease-in-out font-medium text-sm overflow-hidden ${
          mobileOpen ? "max-w-full" : "max-w-0"
        }`}
      >
        <div className="flex flex-col">
          <button
            onClick={() => setAlumniAccordion(!alumniAccordion)}
            className="py-4 px-4 hover:bg-blue-900 w-full text-left flex items-center justify-between"
          >
            Alumni
            <FaChevronDown
              className={`transform duration-300 ${alumniAccordion ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          <div
            className={`flex flex-col bg-umakdarkblue overflow-hidden duration-300 ease-in-out ${
              alumniAccordion ? "max-h-full" : "max-h-0"
            }`}
          >
            <Link to="/" className="py-4 pr-4 pl-10 hover:bg-blue-900">
              Alumni
            </Link>
            <Link to="/" className="py-4 pr-4 pl-10 hover:bg-blue-900">
              Featured Alumni
            </Link>
            <Link to="/" className="py-4 pr-4 pl-10 hover:bg-blue-900">
              Alumni Tracking
            </Link>
          </div>
        </div>
        <Link to="/news" className="py-4 px-4 hover:bg-blue-900">
          News
        </Link>
        <Link to="/about" className="py-4 px-4 hover:bg-blue-900">
          About
        </Link>
        <div className="flex flex-col">
          <button
            onClick={() => setContactAccordion(!contactiAccordion)}
            className="py-4 px-4 hover:bg-blue-900 w-full text-left flex items-center justify-between"
          >
            Contact
            <FaChevronDown
              className={`transform duration-300 ${contactiAccordion ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          <div
            className={`flex flex-col bg-umakdarkblue overflow-hidden duration-300 ease-in-out ${
              contactiAccordion ? "max-h-full" : "max-h-0"
            }`}
          >
            <Link to="/" className="py-4 pr-4 pl-10 hover:bg-blue-900">
              Feedback
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
