import React, { useState } from "react";
import "./NavBar.scss";
import SearchBar from "../search-bar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asset/logo.png";

function NavBar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className="bg-white sticky top-0 left-0 w-full z-50 shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="left flex align-items-center col-md-9">
              <div className="flex-shrink-0 logo" onClick={() => navigate("/")}>
                <img src={logo}></img>
              </div>
              <nav className="hidden lg:flex space-x-4">
                <a
                  href="#"
                  className="text-black-100 font-medium hover:text-blue-500 px-3 py-2 "
                  onClick={() => navigate("/khoa-hoc/394676")}
                >
                  Khóa học
                </a>
                <a
                  href="#"
                  className="text-black-100 font-medium hover:text-blue-500 px-3 py-2"
                  onClick={() => navigate("/blog")}
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-black-100 font-medium hover:text-blue-500 px-3 py-2"
                >
                  Liên hệ
                </a>
              </nav>

              <div className="hidden ml-10 lg:flex w-5/12 ">
                <SearchBar />
              </div>
            </div>

            <div className="right hidden lg:flex space-x-4 col-md-3">
              <div
                className="text-white px-3 py-2 rounded bg-blue-500 hover:bg-blue-600 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </div>
              <div
                className="text-white px-3 py-2 rounded bg-blue-500 hover:bg-blue-600 cursor-pointer"
                onClick={() => navigate("/dang-ky")}
              >
                Đăng ký
              </div>
            </div>

            {/* // btn toggle */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 12h16M4 16h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-blue-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-white hover:text-white block px-3 py-2"
              >
                Khóa học
              </a>
              <a
                href="#"
                className="text-white hover:text-white block px-3 py-2"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white hover:text-white block px-3 py-2"
              >
                Liên hệ
              </a>
            </div>
            <div className="px-4 w-full">
              <SearchBar />
            </div>
            <div className="flex space-x-4 px-4 py-3">
              <div
                className="text-blue-500 px-3 py-2 rounded bg-white cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </div>
              <div
                className="text-blue-500 px-3 py-2 rounded bg-white cursor-pointer"
                onClick={() => navigate("/dang-ky")}
              >
                Đăng ký
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default NavBar;
