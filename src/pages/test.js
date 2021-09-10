import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.scss";
import Footer from "../components/Footer";
import { globalHistory } from "@reach/router";
import { motion } from "framer-motion";
import JumpToTop from "../components/JumpToTop";
import Project from "../components/Project";

const Test = () => {
  const path = globalHistory.location.pathname;

  return (
    <main>
      <Navbar path={path} />
      <JumpToTop />
      <div className={`${styles.home_container} ${styles.padding}`}>
        <div className={styles.home_text_container}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1.0 }}
            transition={{ "easeIn": [0.4, 0.0, 0.2, 0.1] }}
          >
            <h1 className={styles.home_h1}>
              HI, I'M <span className={styles.home_highlight}>VINCENT</span>
            </h1>
          </motion.div>
          <div>
            <motion.h2 className={styles.home_h2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1.0 }}
              transition={{ "easeIn": [0.4, 0.0, 1, 1], delay: 0.15 }}
            >
              I'm a <span className={styles.home_highlight}>Software Engineer</span> and a recent graduate from San Francisco State University.
            </motion.h2>
          </div>
        </div>
      </div>
      <Project 
        mobile="https://res.cloudinary.com/drlylnzt8/image/upload/v1631222494/portfolio/home/ohana_mobile_cypkq6.png" 
        desktop= "https://res.cloudinary.com/drlylnzt8/image/upload/v1631222500/portfolio/home/ohana_desktop_eyzayq.png"
      />
      <Footer />
    </main>
  )
}

export default Test;
