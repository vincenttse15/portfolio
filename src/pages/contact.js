import * as React from "react";
import * as styles from "../styles/contact.module.scss";
import Navbar from "../components/Navbar";
import { ValidationError, useForm } from '@formspree/react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from "../components/Footer";

const useStyles = makeStyles(theme => ({
  emailField: {
    width: "100%",
    color: "#212121",
  },

  nameField: {
    width: "47%",
    color: "#212121",
  },

  button: {
    width: "20%",
    alignSelf: "flex-end",
    backgroundColor: "#212121",
    color: "#FAFAFA",
    '&:hover': {
      backgroundColor: "#424242",
    }
  },

  '@media (max-width: 1445px)': {
    button: {
      width: "25%",
    }
  },

  '@media (max-width: 876px)': {
    button: {
      width: "30%",
    }
  },

  '@media (max-width: 664px)': {
    button: {
      width: "35%",
      alignSelf: "center",
    }
  },

  '@media (max-width: 503px)': {
    button: {
      width: "45%",
    }
  },

  '@media (max-width: 395px)': {
    button: {
      width: "55%",
    }
  },

  '@media (max-width: 327px)': {
    button: {
      width: "70%",
    }
  },
}));

const Contact = ({ location }) => {
  const [state, handleSubmit] = useForm('mrgrkpna');
  const classes = useStyles();

  if (state.succeeded) {
    window.location.reload();
  }

  return (
    <main>
      <Navbar location={location} />
      <div className={`${styles.container} ${styles.padding}`}>
        <h1 className={styles.contact_h1}>GET IN TOUCH</h1>
        <form onSubmit={handleSubmit} className={styles.form_container}>
          <div className={styles.name_container}>
            <TextField
              required
              type="text"
              name="_fname"
              variant="outlined"
              label="First name"
              className={classes.nameField}
            />
            <ValidationError
              prefix="First name"
              field="_fname"
              errors={state.errors}
            />
            <TextField
              required
              type="text"
              name="_lname"
              variant="outlined"
              label="Last name"
              className={classes.nameField}
            />
            <ValidationError
              prefix="Last name"
              field="_lname"
              errors={state.errors}
            />
          </div>
          <TextField
            required
            type="email"
            name="email"
            variant="outlined"
            label="Email"
            className={classes.emailField}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <TextField
            required
            type="text"
            name="message"
            variant="outlined"
            label="Message"
            multiline
            rows={9}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={state.submitting}
            className={classes.button}
            size="large"
            disableRipple
          >
            Send message
          </Button>
        </form>
        <div className={`${styles.divider}`}></div>
      </div>
      <Footer />
    </main>
  )
}

export default Contact;