import * as React from "react";
import * as styles from "../styles/project.module.scss";
import { motion } from "framer-motion";

const Project = (props) => {
  const {
    mobile,
    desktop,
    link,
    name,
    title,
    description,
    detail,
  } = props;

  const [isDesktop, setIsDesktop] = React.useState(false);
  let color = null;

  if (name === "ohana") color = "#0088ff"
  else if (name === "nerd darts") color = "#f44336";

  return (
    <div className={`${styles.padding} ${styles.container}`}>
      {isDesktop &&
        (
          <motion.img 
            src={desktop} 
            className={styles.desktop} 
            alt="desktop view" 
            role="presentation" 
            onClick={() => setIsDesktop(false)}
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
              transition: {
                "easeIn": [0.4, 0.0, 0.2, 0.1],
              }
            }}
          />
        )
      }
      {!isDesktop &&
        (
          <>
            <motion.img 
              src={mobile} 
              className={styles.mobile} 
              alt="mobile view" 
              role="presentation" 
              onClick={() => setIsDesktop(true)}
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                transition: {
                  "easeIn": [0.4, 0.0, 0.2, 0.1],
                }
              }}
            />
            <motion.div
              className={styles.text_container}
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                transition: {
                  "easeIn": [0.4, 0.0, 0.2, 0.1],
                }
              }}
            >
              <h1 className={styles.title} style={{ color: color }}>{title}</h1>
              <h2 className={styles.detail}>{detail}</h2>
              <p className={styles.description}>{description}</p>
              <a href={link} target="_blank" rel="noreferrer" className={styles.link} style={{ color: color }}>VIEW PAGE</a>
            </motion.div>
          </>
        )
      }
    </div>
  );
}

export default Project;