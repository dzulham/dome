import styles from "./SearchBox.module.css";
import PropTypes from "prop-types";
import "../../styles/global.css";
import Router from 'next/router'
import { Formik, Form, Field } from "formik"

const SearchBox = (props) => (
  <Formik
    initialValues={{ query: '' }}
    onSubmit={(values, actions) => {
      Router.push("/search?query=" + values.query)
      actions.setSubmitting(false)
    }}
    validate={values => {
      const errors = {}
      if (!values.query) {
        errors.query = 'Type something first!';
      }
      return errors
    }}
    render={({ errors, isSubmitting }) => (
      <Form className={styles.box}>
        <Field className={styles.input} type="text" name="query" placeholder={errors.query || props.placeholder} />
        <button className={styles.button} type="submit" disabled={isSubmitting} />
      </Form>
    )}
  />
);

SearchBox.propTypes = {
  placeholder: PropTypes.node.isRequired
};

export default SearchBox;
