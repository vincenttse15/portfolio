import * as React from "react";
import * as styles from "../styles/navbar.module.scss";
import PDF from '../resume/Vincent_Tse_Resume.pdf';
import { Link } from 'gatsby';

const Navbar = ({location}) => {
  React.useEffect(() => {
    if (location.pathname.includes('about')) {
      document.getElementById("nav-about").classList.add(styles.active);
    }
    else {
      document.getElementById("nav-home").classList.add(styles.active);
    }
  }, [location.pathname]);

  return (
    <div className={`${styles.navbar} ${styles.padding}`}>
      <div className={styles.name}>
        <Link to="/" className={styles.link}>VINCENT TSE</Link>
      </div>
      <div className={styles.link_container} id="links">
        <Link to="/" className={`${styles.link} ${styles.right_link}`} id="nav-home">PORTFOLIO</Link>
        <Link to="/about" className={`${styles.link} ${styles.right_link}`} id="nav-about">ABOUT</Link>
        <a href="#contact" className={`${styles.link} ${styles.right_link}`}>CONTACT</a>
        <a href={PDF} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.right_link}`}>RESUME</a>
      </div>
    </div>
  )
}

export default Navbar;