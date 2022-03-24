import React from "react";
import styles from "../assets/navbar.module.scss";

// in v6, router adds active page class via a function in classname.
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? styles.isActive : "")}
        >
          Basics
        </NavLink>
        <NavLink
          to="/adv"
          className={(navData) => (navData.isActive ? styles.isActive : "")}
        >
          Advanced
        </NavLink>
        <NavLink
          to="/less"
          className={(navData) => (navData.isActive ? styles.isActive : "")}
        >
          Less Used
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
