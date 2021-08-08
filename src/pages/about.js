import * as React from "react";
import * as styles from "../styles/about.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { globalHistory } from "@reach/router";
import Slider from "../components/Slider";

const About = () => {
  const path = globalHistory.location.pathname;

  return (
    <main>
      <Navbar path={path} />
      <div className={`${styles.about_container} ${styles.padding}`}>
        <div className={styles.image_container}>
          <Slider />
        </div>
        <div className={styles.text_container}>
          <h1 className={styles.text_h1}>ABOUT ME</h1>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            Hi, I'm Vincent Tse, a software engineer based in San Jose, CA.
            In May 2021, I acquired my Bachelor's Degree in Computer Science
            from San Francisco State University with my main focus being on front-end
            development.
          </p>
          <p className={styles.text}>
            In my free time I enjoy watching movies and shows, playing games, finding new music, and drawing on MS Paint.
          </p>
          <p className={styles.text}>
            I'm currently looking for full-time frontend engineering opportunities. You can reach me at <a className={styles.email} href="mailto:vincenttse19@gmail.com">vincenttse19@gmail.com</a>.
          </p>
        </div>
      </div>
      <div className={`${styles.padding}`}>
        <div className={styles.footer_divider} /> 
      </div>
      <Footer />
    </main>
  )
}

export default About;
