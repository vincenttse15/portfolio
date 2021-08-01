import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.scss";
import Footer from "../components/Footer";
import { globalHistory } from "@reach/router";

const IndexPage = () => {
  const path = globalHistory.location.pathname;

  return (
    <main>
      <Navbar path={path} />
      <div className={`${styles.home_container} ${styles.padding}`}>
        <div className={styles.home_text_container}>
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
      </div>
      <div className={`${styles.ohana_container} ${styles.padding} ${styles.project_container}`}>
        <div className={styles.image_container}>
          <img src="https://res.cloudinary.com/drlylnzt8/image/upload/v1627851942/portfolio/home/ohana-logo_cm8f4o_habss5.png" alt="band" className={styles.ohana}></img>
        </div>
        <div className={styles.description_container}>
          <span className={styles.project_title}>Ohana</span>
          <span className={styles.project_description}>
            An application that linked hotels with influencers to market their brand.
          </span>
          <span className={styles.project_technology_title}>Technology</span>
          <div className={styles.project_technology}>
            <span>React.js</span>
            <span>GraphQL</span>
            <span>Redux</span>
          </div>
        </div>
      </div>
      <div className={`${styles.doremeet_container} ${styles.padding} ${styles.project_container}`}>
        <div className={styles.image_container}>
          <img src="https://res.cloudinary.com/drlylnzt8/image/upload/v1627849002/portfolio/home/band_msstx0.png" alt="band" className={styles.band}></img>
        </div>
        <div className={styles.description_container}>
          <span className={styles.project_title}>DoReMeet</span>
          <span className={styles.project_description}>
            An application that linked artists by genre and meeting preference (virtual or non virtual).
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
      <div className={`${styles.marketplace_container} ${styles.padding} ${styles.project_container}`}>
        <div className={styles.image_container}>
          <img src="https://res.cloudinary.com/drlylnzt8/image/upload/v1627849002/portfolio/home/ecommerce_o2iisf.png" alt="ecommerce" className={styles.marketplace}></img>
        </div>
        <div className={styles.description_container}>
          <span className={styles.project_title}>Marketplace 2.0</span>
          <span className={styles.project_description}>An e-commerce application.</span>
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
      <div className={`${styles.database_container} ${styles.padding} ${styles.project_container}`}>
        <div className={styles.image_container}>
          <img src="https://res.cloudinary.com/drlylnzt8/image/upload/v1627849001/portfolio/home/database_azgjru.png" alt="database" className={styles.database}></img>
        </div>
        <div className={styles.description_container}>
          <span className={styles.project_title}>Database Project</span>
          <span className={styles.project_description}>
            A command line application that utilized a database created in MySQL purposed for a University.
          </span>
          <span className={styles.project_technology_title}>Technology</span>
          <div className={styles.project_technology}>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage;
