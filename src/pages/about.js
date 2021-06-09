import * as React from "react";
import * as styles from "../styles/about.module.scss";
import Navbar from "../components/Navbar";
import vincent from "../images/vincent.jpeg";
const About = () => {
  return (
    <body id="top">
      <main>
        <Navbar />
        <div className={`${styles.container} ${styles.padding}`}>
          <div className={styles.image_container}>
            <img src={vincent} alt="vincent" className={styles.image}></img>
          </div>
          <div className={styles.text_container}>
            <h1 className={styles.text_h1}>ABOUT ME</h1>
            <p className={styles.text}>
              Hi, I'm Vincent Tse, a software engineer based in San Jose, CA.
              I believe that adaptability and empathy are strengths that have allowed
              humans to thrive, and technology is an outlet I feel most comfortable with 
              to make use of these strengths. In May 2020, I completed my Bachelor's Degree 
              in Computer Science at San Francisco State University.
            </p>
            <p className={styles.text}>
              
            </p>
          </div>
        </div>
      </main>
    </body>
  )
}

export default About;
