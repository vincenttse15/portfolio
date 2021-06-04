import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.scss";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <body id="top">
      <main>
        <Navbar />
        <div className={styles.home_container}>
          <div>
            <h1 className={styles.home_h1}>
              Vincent Tse
            </h1>
          </div>
          <div>
            <h2 className={styles.home_h2}>
              Software Engineer
            </h2>
          </div>
          <div>
            <h3 className={styles.home_h3}>
              San Jose
            </h3>
          </div>
        </div>
        <div className={styles.portfolio_container}>
          <div className={styles.portfolio_heading}>
            <h1 className={styles.portfolio_h1} id="projects">
              Projects
            </h1>
          </div>
          <div className={styles.project_container}>
            <h2 className={styles.project_title}>
              DoReMeet
            </h2>
            <span className={styles.project_description}>
              The first application I built using ReactJS with a team of six as front-end engineer.
              This application was created to link artists by genre and meeting preference (virtual or non virtual).
            </span>
            <h3 className={styles.project_technology}>
              Technology
            </h3>
            <div className={styles.technology_container}>
              <span className={styles.technology}>JavaScript</span>
              <span className={styles.technology}>React.js</span>
              <span className={styles.technology}>Node.js</span>
              <span className={styles.technology}>Express.js</span>
            </div>
          </div>
          <div className={styles.project_container}>
            <h2 className={styles.project_title}>
              Marketplace 2.0
            </h2>
            <span className={styles.project_description}>
              An e-commerce application I developed with a team of four as full-stack engineer.
            </span>
            <h3 className={styles.project_technology}>
              Technology
            </h3>
            <div className={styles.technology_container}>
              <span className={styles.technology}>JavaScript</span>
              <span className={styles.technology}>TypeScript</span>
              <span className={styles.technology}>MongoDB</span>
              <span className={styles.technology}>React.js</span>
              <span className={styles.technology}>Redux</span>
              <span className={styles.technology}>Node.js</span>
              <span className={styles.technology}>Express.js</span>
            </div>
          </div>
          <div className={styles.project_container}>
            <h2 className={styles.project_title}>
              Database Project
            </h2>
            <span className={styles.project_description}>
              Designed a command line application from the ground up that utilizes a database created
              in MySQL purposed for a University.
            </span>
            <h3 className={styles.project_technology}>
              Technology
            </h3>
            <div className={styles.technology_container}>
              <span className={styles.technology}>Node.js</span>
              <span className={styles.technology}>Express.js</span>
              <span className={styles.technology}>MySQL</span>
            </div>
          </div>
        </div>
        <div className={styles.contact_container} id="contact">
          <h1 className={styles.contact_h1}>Contact</h1>
          <Footer />
        </div>
      </main>
    </body>
  )
}

export default IndexPage;
