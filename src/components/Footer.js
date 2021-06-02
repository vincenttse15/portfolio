import * as React from 'react';
import * as styles from '../styles/footer.module.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
  library.add(fab);

  return (
    <div className={styles.footer}>
      <div className={styles.link_container}>
        <a className={styles.link} href="https://github.com/vincenttse15">
          <FontAwesomeIcon icon={['fab', 'github-square']} className={styles.image}/>
        </a>
        <a className={styles.link} href="https://www.linkedin.com/in/vincent-tse-0084a7210/">
          <FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.image}/>
        </a>
      </div>
      <div>
        <a className={styles.email} href="mailto:vincenttse19@gmail.com">vincenttse19@gmail.com</a>
      </div>
    </div>
  )
}

export default Footer;