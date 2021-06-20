import * as React from "react";
import * as styles from "../styles/about.module.scss";
import Navbar from "../components/Navbar";
import vincent from "../images/vincent.jpeg";
import Footer from "../components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import woody from "../images/woody.png";
import shrek from "../images/shrek.png";
import spiderverse from "../images/spiderverse.png";
import findingnemo from "../images/findingnemo.png";

const About = ({ location }) => {
  library.add(fas);

  return (
    <main>
      <Navbar location={location} />
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
            In May 2021, I acquired my Bachelor's Degree in Computer Science
            from San Francisco State University with my main focus being on front-end
            development.
          </p>
          <p className={styles.text}>
            In my free time I enjoy watching movies and shows, playing games, finding new music, and drawing on MS Paint.
          </p>
          <p className={styles.text}>
            I'm currently looking for full-time software engineering opportunities. You can reach me at <a className={styles.email} href="mailto:vincenttse19@gmail.com">vincenttse19@gmail.com</a>.
          </p>
        </div>
      </div>
      <div className={`${styles.drawing_header} ${styles.padding}`}>
        <h1 className={styles.header_h1}>SOME THINGS I DREW</h1>
        <FontAwesomeIcon icon={['fas', 'palette']} className={styles.icons} />
        <FontAwesomeIcon icon={['fas', 'paint-brush']} className={styles.icons} />
      </div>
      <div className={`${styles.woody_container} ${styles.padding}`}>
        <div className={styles.paint_image_container}>
          <div className={styles.woody}>
            <img src={woody} alt="woody" className={styles.image}></img>
          </div>
        </div>
        <div className={styles.description_container}>
          <h1 className={styles.paint_character}>WOODY</h1>
        </div>
      </div>
      <div className={`${styles.shrek_container} ${styles.padding}`}>
        <div className={styles.description_container}>
          <h1 className={styles.paint_character}>SHREK</h1>
        </div>
        <div className={styles.paint_image_container}>
          <div className={styles.shrek}>
            <img src={shrek} alt="shrek" className={styles.image}></img>
          </div>
        </div>
      </div>
      <div className={`${styles.spiderverse_container} ${styles.padding}`}>
        <div className={styles.paint_image_container}>
          <div className={styles.spiderverse}>
            <img src={spiderverse} alt="spiderverse" className={styles.image}></img>
          </div>
        </div>
        <div className={styles.description_container}>
          <h1 className={styles.paint_character}>PETER PARKER</h1>
          <h1 className={styles.paint_character}>MILES MORALES</h1>
          <h1 className={styles.paint_character}>GWEN STACY</h1>
        </div>
      </div>
      <div className={`${styles.findingnemo_container} ${styles.padding}`}>
        <div className={styles.description_container}>
          <h1 className={styles.paint_character}>MARLIN</h1>
          <h1 className={styles.paint_character}>DORY</h1>
        </div>
        <div className={styles.paint_image_container}>
          <div className={styles.findingnemo}>
            <img src={findingnemo} alt="findingnemo" className={styles.image}></img>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default About;
