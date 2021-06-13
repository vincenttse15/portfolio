import * as React from "react";
import * as styles from "../styles/footer.module.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  library.add(fab, fas);
  return (
    <div className={`${styles.footer_container} ${styles.padding}`}>
      <div className={styles.text_container}>
        <h1 className={styles.footer_h1}>
          CONNECT WITH ME
        </h1>
      </div>
      <div className={`${styles.socials_container}`}>
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
  )
}

export default Footer;