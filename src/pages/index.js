import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.scss";
//import Footer from "../components/Footer";
import music from "../images/music.png";
import band from "../images/band.png";

const IndexPage = () => {
  return (
    <body id="top">
      <main>
        <Navbar />
        <div className={styles.home_container}>
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
        <div className={styles.doremeet_container}>
          <div className={styles.image_container}>
            <img src={music} alt="music" className={styles.music}></img>
            <img src={band} alt="band"></img>
          </div>
          <div className={styles.description_container}>
            <span className={styles.project_title}>DoReMeet</span>
          </div>
        </div>
      </main>
    </body>
  )
}

export default IndexPage;
