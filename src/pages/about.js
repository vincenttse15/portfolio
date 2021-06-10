import * as React from "react";
import * as styles from "../styles/about.module.scss";
import Navbar from "../components/Navbar";
import vincent from "../images/vincent.jpeg";
import Footer from "../components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import woody from "../images/woody.png";

const About = () => {
  library.add(fas);

  return (
    <body id="top">
      <main>
        <Navbar />
        <div className={`${styles.about_container} ${styles.padding}`}>
          <div className={styles.image_container}>
            <div className={styles.vincent}>
              <img src={vincent} alt="vincent" className={styles.image}></img>
            </div>
          </div>
          <div className={styles.text_container}>
            <h1 className={styles.text_h1}>ABOUT ME</h1>
            <div className={styles.divider}></div>
            <p className={styles.text}>
              Hi, I'm Vincent Tse, a software engineer based in San Jose, CA.
              I believe that adaptability and communication are required skills to produce
              usable applications. In May 2020, I acquired my Bachelor's Degree in Computer Science
              from San Francisco State University where I developed these skills through course projects.
              </p>
            <p className={styles.text}>
              In my free time I enjoy watching movies and shows, playing games, finding new music, and drawing on MS Paint.
              </p>
            <p className={styles.text}>
              I'm currently looking for full-time software engineering opportunities. You can reach me at <a className={styles.email} href="mailto:vincenttse19@gmail.com">vincenttse19@gmail.com</a>.
              </p>
          </div>
        </div>
        <div className={styles.drawing_header}>
          <h1 className={styles.header_h1}>SOME THINGS I DREW</h1>
          <FontAwesomeIcon icon={['fas', 'palette']} className={styles.icons} />
          <FontAwesomeIcon icon={['fas', 'paint-brush']} className={styles.icons} />
        </div>
        <div className={`${styles.woody_container} ${styles.padding}`}>
          <div className={styles.image_container}>
            <div className={styles.woody}>
              <img src={woody} alt="woody" className={styles.image}></img>
            </div>
          </div>
          <div className={styles.description_container}>
            <h1 className={styles.paint_text}>TOY STORY</h1>
            <h1 className={styles.paint_text}>WOODY</h1>
          </div>
        </div>
        <Footer />
      </main>
    </body>
  )
}

export default About;
