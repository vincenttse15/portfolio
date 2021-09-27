import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.scss";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import JumpToTop from "../components/JumpToTop";
import Project from "../components/Project";

const IndexPage = () => {

  return (
    <main>
      <Navbar />
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
        mobile="https://res.cloudinary.com/drlylnzt8/image/upload/v1631308936/portfolio/home/ohana_mobile_gcyw4n.png" 
        desktop= "https://res.cloudinary.com/drlylnzt8/image/upload/v1631316326/portfolio/home/ohana_desktop_ss_feu7x9.png"
        link="https://ohana.io"
        name="ohana"
        title="Ohana"
        detail="Jun 2021 - Jul 2021 · Internship"
        description="An application that links hotels with influencers to market their brand."
      />
      <Project
        mobile="https://res.cloudinary.com/drlylnzt8/image/upload/v1631309514/portfolio/home/nerddarts_mobile_w88884.png"
        desktop="https://res.cloudinary.com/drlylnzt8/image/upload/v1631316662/portfolio/home/nerddarts_desktop_ss_lqbw5m.png"
        link="https://nerddarts.herokuapp.com"
        name="nerd darts"
        title="Nerd Darts"
        detail="Apr 2021 - Present · Side Project"
        description="An application that helps people who play the massive multiplayer online video game VALORANT."
      />
      <Footer />
    </main>
  )
}

export default IndexPage;
