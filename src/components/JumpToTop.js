import * as React from "react";
import * as styles from "../styles/jumptotop.module.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

const JumpToTop = () => {
  library.add(fas);

  const [visible, setVisible] = React.useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const checkVisibility = () => {
    if (window.scrollY > 60) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("scroll", checkVisibility);

    return () => {
      document.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && 
          (
          <motion.button 
            className={`${styles.button}`} 
            onClick={scrollToTop} 
            animate={{ opacity: 1.0 }}
            transition={{ "easeIn": [0.4, 0.0, 0.2, 0.1] }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0}}
          >
            <FontAwesomeIcon icon={['fas', 'arrow-up']} className={styles.icon}/>
          </motion.button>
          )
        }
      </AnimatePresence>
    </>
  );
}

export default JumpToTop;