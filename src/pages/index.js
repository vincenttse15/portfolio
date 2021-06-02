import * as React from "react"
import Navbar from "../components/Navbar";
import * as styles from "../styles/index.module.css";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <body>
      <main>
        <Navbar/>
        <div className={styles.page_container}>
          <div>
            <h1>
              Vincent Tse
            </h1>
          </div>
          <div>
            <h2>
              Software Engineer
            </h2>
          </div>
          <div>
            <h3>
              San Jose
            </h3>
          </div>
        </div>
        <Footer />
      </main>
    </body>
  )
}

export default IndexPage;
