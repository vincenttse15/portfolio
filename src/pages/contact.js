import * as React from "react";
import * as styles from "../styles/contact.module.scss";
import Navbar from "../components/Navbar";
import { ValidationError, useForm } from '@formspree/react';

const Contact = ({ location }) => {
  const [state, handleSubmit] = useForm('mrgrkpna');
  return (
    <body id="top">
      <main>
        <Navbar location={location} />
        <div className={`${styles.container} ${styles.padding}`}>
          <h1 className={styles.contact_h1}>GET IN TOUCH</h1>
          <form onSubmit={handleSubmit} className={styles.form_container}>
            <div className={styles.name_container}>
              <input
                type="text"
                name="_fname"
                placeholder="First name"
                className={styles.name_field}
              />
              <ValidationError
                prefix="First name"
                field="_fname"
                errors={state.errors}
              />
              <input
                type="text"
                name="_lname"
                placeholder="Last name"
                className={styles.name_field}
              />
              <ValidationError
                prefix="Last name"
                field="_lname"
                errors={state.errors}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              type="text"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>Send message</button>
          </form>
        </div>
      </main>
    </body>
  )
}

export default Contact;