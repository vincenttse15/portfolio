import * as React from "react";
import * as styles from "../styles/navbar.module.css";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.name}>
        <Link to="/" className={styles.link}>VINCENT TSE</Link>
      </div>
      <div className={styles.link_container}>
        <Link to="/portfolio" className={styles.link}>PORTFOLIO</Link>
      </div>
    </div>
  )
}

export default Navbar;