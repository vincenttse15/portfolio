import * as React from "react";
import * as styles from "../styles/navbar.module.scss";
import PDF from '../resume/Vincent_Tse_Resume.pdf';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${styles.padding}`}>
      <div className={styles.name}>
        <Link to="/" className={styles.link}>VINCENT TSE</Link>
      </div>
      <div className={styles.link_container}>
        <a href="#projects" className={`${styles.link} ${styles.right_link}`}>PORTFOLIO</a>
        <Link to="/about" className={`${styles.link} ${styles.right_link}`}>ABOUT</Link>
        <a href={PDF} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.right_link}`}>RESUME</a>
      </div>
    </div>
  )
}

export default Navbar;