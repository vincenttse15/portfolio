import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.scss";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <body>
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
            <h1 className={styles.portfolio_h1}>
              Projects
            </h1>
          </div>
          <div className={styles.project_container}>
            <h2 className={styles.project_title}>
              DoReMeet
            </h2>
            <ul className={styles.project_list}>
              <li>
                Support a six-person team in a frontend capacity to create an application that links artists
                by genre and meeting preference (virtual or non virtual)
              </li>
              <li>
                Accomplished documentation of user requirements, use cases, priorities, quality assurance
                tests, and usability tests
              </li>
              <li>
                Streamlined features that allowed registered users to post and search in a collaborative
                environment
              </li>
              <li>
                Devised components such as user profiles and matches into the application
              </li>
            </ul>
            <h3 className={styles.project_technology}>
              Technology
            </h3>
            <div className={styles.technology_container}>
              <span className={styles.technology}>JavaScript</span>
              <span className={styles.technology}>ReactJS</span>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </body>
  )
}

export default IndexPage;
