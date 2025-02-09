import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { IoIosCloudDownload } from "react-icons/io";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.kartik_logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonials", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <a
        className="app__navbar-button"
        href={
          "https://drive.google.com/file/d/1xVJIOQjJOaZNeRS3yAGFva0U7-a7zquc/view?usp=sharing"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="resume">
          <IoIosCloudDownload /> Resume
        </button>
      </a>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonials",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <a
                href={
                  "https://drive.google.com/file/d/1xVJIOQjJOaZNeRS3yAGFva0U7-a7zquc/view?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume-mobile">
                  <IoIosCloudDownload
                    style={{ height: "25px", width: "25px" }}
                  />
                  Resume
                </button>
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
