import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.scss";
import music from "../images/music.png";
import band from "../images/band.png";
import ecommerce from "../images/ecommerce.png";
import database from "../images/database.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndexPage = () => {
  library.add(fab, fas);

  return (
    <body id="top">
      <main>
        <Navbar />
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
          <div className={styles.socials_container}>
            <a className={styles.social_link} href="https://github.com/vincenttse15" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'github-square']} className={styles.social_image} />
            </a>
            <a className={styles.social_link} href="https://www.linkedin.com/in/vincent-tse-0084a7210/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.social_image} />
            </a>
            <a className={styles.social_link} href="mailto:vincenttse19@gmail.com">
              <FontAwesomeIcon icon={['fas', 'envelope-square']} className={styles.social_image} />
            </a>
          </div>
        </div>
        <div className={`${styles.doremeet_container} ${styles.padding}`} id="projects">
          <div className={styles.image_container}>
            <div className={styles.music}>
              <img src={music} alt="music" className={styles.image}></img>
            </div>
            <div className={styles.band}>
              <img src={band} alt="band" className={styles.image}></img>
            </div>
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
            <div className={styles.marketplace}>
              <img src={ecommerce} alt="ecommerce" className={styles.image}></img>
            </div>
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
        <div className={`${styles.database_container} ${styles.padding}`}>
          <div className={styles.image_container}>
            <div className={styles.database}>
              <img src={database} alt="database" className={styles.image}></img>
            </div>
          </div>
          <div className={styles.description_container}>
            <span className={styles.project_title_bright}>Database Project</span>
            <span className={styles.project_description_bright}>
              Designed a command line application from the ground up that utilizes a database created
              in MySQL purposed for a University.
            </span>
            <span className={styles.project_technology_title_bright}>Technology</span>
            <div className={styles.project_technology}>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

export default IndexPage;
