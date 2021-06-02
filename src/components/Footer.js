import * as React from 'react';
import * as styles from '../styles/footer.module.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <a href="https://github.com/vincenttse15">
          <img className={styles.link_image} src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/vincent-tse-0084a7210/">
          <img className={styles.link_image} src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div>
        <a className={styles.email} href="mailto:vincenttse19@gmail.com">vincenttse19@gmail.com</a>
      </div>
    </div>
  )
}

export default Footer;