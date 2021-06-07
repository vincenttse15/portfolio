import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.scss";
//import Footer from "../components/Footer";
import music from "../images/music.png";
import band from "../images/band.png";
import ecommerce from "../images/ecommerce.png"

const IndexPage = () => {
  return (
    <body id="top">
      <main>
        <Navbar />
        <div className={`${styles.home_container} ${styles.padding}`}>
          <div>
            <h1 className={styles.home_h1}>
              HI, I'M <span className={styles.home_highlight}>VINCENT</span>.
            </h1>
          </div>
          <div>
            <h2 className={styles.home_h2}>
              I'm a <span className={styles.home_highlight}>Software Engineer</span> and a recent graduate from San Francisco State University.
            </h2>
          </div>
        </div>
        <div className={`${styles.doremeet_container} ${styles.padding}`}>
          <div className={styles.image_container}>
            <img src={music} alt="music" className={styles.music}></img>
            <img src={band} alt="band" className={styles.band}></img>
          </div>
          <div className={styles.description_container}>
            <span className={styles.project_title}>DoReMeet</span>
            <span className={styles.project_description}>
              The first application I built using ReactJS with a team of six as front-end engineer.
              This application was created to link artists by genre and meeting preference (virtual or non virtual).
            </span>
            <span className={styles.project_technology_title}>Technology</span>
            <div className={styles.project_technology}>
              <span>React.js</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>Express.js</span>
            </div>
          </div>
        </div>
        <div className={`${styles.marketplace_container} ${styles.padding}`}>
          <div className={styles.image_container}>
            <img src={ecommerce} alt="ecommerece"></img>
          </div>
          <div className={styles.description_container}>
            <span className={styles.project_title}>Marketplace 2.0</span>
            <span className={styles.project_description}>An e-commerce application I developed with a team of four as full-stack engineer.</span>
            <span className={styles.project_technology_title}>Technology</span>
            <div className={styles.project_technology}>
              <span>React.js</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>Redux</span>
              <span>MongoDB</span>
              <span>Node.js</span>
              <span>Express.js</span>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

export default IndexPage;
