import * as React from "react";
import * as styles from "../styles/navbar.module.scss";
import PDF from '../resume/Vincent_Tse_Resume.pdf';

const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${styles.padding}`}>
      <div className={styles.name}>
        <a href="#top" className={styles.link}>VINCENT TSE</a>
      </div>
      <div className={styles.link_container}>
        <a href="#projects" className={`${styles.link} ${styles.right_link} ${styles.middle}`}>PORTFOLIO</a>
        <a href="#contact" className={`${styles.link} ${styles.right_link} ${styles.middle}`}>CONTACT</a>
        <a href={PDF} target="_blank" rel="noreferrer" className={`${styles.resume} ${styles.right_link} ${styles.middle}`}>RESUME</a>
      </div>
    </div>
  )
}

export default Navbar;