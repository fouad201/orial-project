import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdown when toggling mobile menu
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (path) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
    navigate(path);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Add event listener for clicks outside dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="ORIAL Logo" className="logo" />
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <span
                className="nav-item clickable"
                onClick={() => handleNavigation("/")}
              >
                الصفحة الرئيسية
              </span>
            </li>
            <li
              className={`services-dropdown ${isDropdownOpen ? "active" : ""}`}
              ref={dropdownRef}
            >
              <div
                className="dropdown-toggle clickable"
                onClick={(e) => {
                  toggleDropdown(e);
                  handleNavigation("/services");
                }}
              >
                الخدمات
              </div>
              <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <li>
                  <span className="nav-item">
                    خدمات تطوير التطبيقات المخصصة
                  </span>
                </li>
                <li>
                  <span className="nav-item">
                    خدمات تطوير تطبيقات الويب والمواقع
                  </span>
                </li>
                <li>
                  <span className="nav-item">خدمات تطوير الثيمات المتقدمة</span>
                </li>
                <li>
                  <span className="nav-item">خدمات التصميم والبراندنج</span>
                </li>
              </ul>
            </li>
            <li>
              <span
                className="nav-item clickable"
                onClick={() => handleNavigation("/portfolio")}
              >
                أعمالنا
              </span>
            </li>
            <li>
              <span
                className="nav-item clickable"
                onClick={() => handleNavigation("/team")}
              >
                الفريق
              </span>
            </li>
            <li>
              <span
                className="nav-item clickable"
                onClick={() => handleNavigation("/about")}
              >
                عنا
              </span>
            </li>
            <li>
              <span
                className="nav-item clickable"
                onClick={() => handleNavigation("/contact")}
              >
                اتصل بنا
              </span>
            </li>
          </ul>
        </div>

        <div className="mobile-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
