import * as React from "react";
import * as styles from "../styles/about.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JumpToTop from "../components/JumpToTop";

const paint = (url) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.image_container}>
      <img src={url} alt="ms paint" className={styles.image} />
    </a>
  );
}

const About = () => {
  return (
    <main>
      <Navbar />
      <JumpToTop />
      <div className={`${styles.about_container} ${styles.padding}`}>
        <div className={styles.header}>
          <h1 className={styles.about_h1}>ABOUT ME</h1>
          <img src="https://res.cloudinary.com/drlylnzt8/image/upload/v1627861857/portfolio/about/vincent_ld2otc.png" className={styles.profile_pic} alt="vincent" />
        </div>
        <div className={styles.blue_divider} />
        <div className={styles.text}>
          <p>
            Hi, I'm Vincent Tse, a software engineer based in San Jose, CA. In May 2021, I acquired my Bachelor's Degree in Computer Science from San 
            Francisco State University. During my last year at SFSU, my passion for web development grew while collaborating with teammates as we helped each
            other learn and progress our skills as software engineers.
          </p>
          <p>
            Soon after I graduated, I developed this portfolio site, interned for
            {' '} 
            <a href="https://ohana.io" target="_blank" rel="noreferrer" className={styles.link}>Ohana</a> as a frontend engineer, and deployed a side project called
            {' '}
            <a href="https://nerddarts.herokuapp.com/" target="_blank" rel="noreferrer" className={styles.link}>Nerd Darts</a> in a full stack capacity with a friend.
            Nerd Darts is the result of combining two of my interests web development and gaming. I also enjoy watching movies and shows, finding new music, and drawing
            on Microsoft Paint!
          </p>
          <p>
            I am currently seeking full-time software engineering opportunities, you can reach me at
            {' '} 
            <a href="mailto:vincenttse19@gmail.com" className={styles.link}>vincenttse19@gmail.com</a>.
          </p>
        </div>
        <div className={styles.divider} />
      </div>
      <div className={`${styles.paint_container} ${styles.padding}`}>
        {paint("https://res.cloudinary.com/drlylnzt8/image/upload/v1627848984/portfolio/about/woody_zfvluo.png")}
        {paint("https://res.cloudinary.com/drlylnzt8/image/upload/v1627848984/portfolio/about/shrek_adivxs.png")}
      </div>
      <div className={`${styles.paint_container} ${styles.padding}`}>
        {paint("https://res.cloudinary.com/drlylnzt8/image/upload/v1627848984/portfolio/about/spiderverse_jrcykf.png")}
        {paint("https://res.cloudinary.com/drlylnzt8/image/upload/v1627848984/portfolio/about/findingnemo_audhvx.png")}
      </div>
      <div className={styles.padding}>
        <div className={styles.divider} style={{ marginTop: "50px", marginBottom: "0px"}}/>
      </div>
      <Footer />
    </main>
  )
}

export default About;
