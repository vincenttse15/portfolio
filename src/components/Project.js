import * as React from "react";
import * as styles from "../styles/project.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const Project = (props) => {
  const {
    mobile,
    desktop
  } = props;

  const [isDesktop, setIsDesktop] = React.useState(true);

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
        )
      }
    </div>
  );
}

export default Project;