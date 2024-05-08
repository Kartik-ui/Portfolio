import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoIosCloudDownload } from "react-icons/io";

import "./Navbar.scss";
import { images } from "../../constants";
import resume from "../../assets/resume/Kartik_Latest_Resume.pdf";

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
      <a className="app__navbar-button" href={resume} download="Resume">
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
              <a href={resume} download="Resume">
                <button className="resume-mobile">
                  <IoIosCloudDownload
                    style={{ height: "25px", width: "25px" }}
                  />{" "}
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
