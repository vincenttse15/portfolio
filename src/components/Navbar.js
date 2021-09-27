import * as React from "react";
import * as styles from "../styles/navbar.module.scss";
import PDF from '../resume/Resume.pdf';
import { Link } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";

const Navbar = () => {
  library.add(fas);
  const [open, setOpen] = React.useState(false);
  const [hasWindow, setHasWindow] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(0);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  
  const handleMenuClick = () => {
    if (open) {
      setOpen(false);
      document.getElementById('menu-button').classList.remove(styles.menu_button_active);
      document.getElementById('link-container').classList.remove(styles.link_container_active);
      document.getElementById('nav').classList.remove(styles.navbar_active);
      document.getElementById('menu').classList.remove(styles.menu_active);
      document.body.style.overflow = 'visible';

      const rightLinks = document.getElementsByClassName(styles.right_link);
      for (let rightLink of rightLinks) {
        rightLink.classList.remove(styles.right_link_active);
      }
    }
    else {
      setOpen(true);
      document.getElementById('menu-button').classList.add(styles.menu_button_active);
      document.getElementById('link-container').classList.add(styles.link_container_active);
      document.getElementById('nav').classList.add(styles.navbar_active);
      document.getElementById('menu').classList.add(styles.menu_active);
      document.body.style.overflow = 'hidden';

      const rightLinks = document.getElementsByClassName(styles.right_link);
      for (let rightLink of rightLinks) {
        rightLink.classList.add(styles.right_link_active);
      }  
    }
  };

  const handleLinkClick = () => {
    if (open) {
      document.body.style.overflow = 'visible';
    }
  };

  React.useEffect(() => {
    if (!hasWindow) {
      setHasWindow(true);
      updateScreenWidth();
    }

    window.addEventListener("resize", updateScreenWidth);

    if (screenWidth > 768 && open) {
      handleMenuClick();
    }

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    }
  }, [screenWidth]);

  return (
    <motion.div
      initial={{ y: "-60px"}}
      animate={{ y: "0px"}}
      transition={{ ease: [0.4, 0.0, 0.2, 0.1]}}
    >
      <div className={`${styles.navbar} ${styles.padding}`} id="nav">
        <Link to="/" className={styles.left_link}>
          <img src="https://res.cloudinary.com/drlylnzt8/image/upload/v1630459016/portfolio/home/logo2_fkrx1z.svg" alt="logo" className={styles.svg} />
        </Link>
        
        <div className={styles.menu} id="menu">
          <button type="button" className={styles.button} onClick={handleMenuClick}>
            <FontAwesomeIcon icon={['fas', 'bars']} className={styles.menu_button} id="menu-button"/>
          </button>
        </div>

        <div className={styles.link_container} id="link-container">
          <Link to="/" className={`${styles.link} ${styles.right_link}`} id="nav-home" onClick={handleLinkClick} activeClassName={styles.active}>Portfolio</Link>
          <Link to="/about/" className={`${styles.link} ${styles.right_link}`} id="nav-about" onClick={handleLinkClick} activeClassName={styles.active}>About</Link>
          <Link to="/contact/" className={`${styles.link} ${styles.right_link}`} id="nav-contact" onClick={handleLinkClick} activeClassName={styles.active}>Contact</Link>
          <a href={PDF} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.right_link}`} id="nav-resume" onClick={handleLinkClick}>Resume</a>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar;