import styles from "./LoginForm.module.css"
import "../../styles/global.css"
import { Formik, Form, Field } from "formik"
import { withRouter } from "next/router"
import PropTypes from "prop-types"

const LoginForm = (props) => (
  <Formik
    initialValues={{ username: '', password: '' }}

    onSubmit={(values, actions) => {
      actions.setStatus("Authenticating...")
      setTimeout(() => {
        if (values.password === "admin") {
          props.router.push("/houses?query=" + values.username)
        } else {
          actions.setErrors({
            password: "Invalid password"
          })
        }
        actions.setSubmitting(false)
        actions.setStatus()
      }, 1000)
    }}

    validate={values => {
      const errors = {}
      if (!values.username) {
        errors.username = 'Username cannot be blank'
      }
      if (!values.password) {
        errors.password = 'Password is required'
      }
      return errors
    }}

    render={({ errors, touched, isSubmitting, status }) => (
      <Form className={styles.login}>
        <Field type="text" name="username" placeholder={'Username'} />
        <Field type="password" name="password" placeholder={'Password'} />
        <Field type="text" name="status" value={
            touched.password && errors.password || 
            touched.username && errors.username || 
            status || "All good!"} readOnly disabled />
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {'Login'}
        </button>
      </Form>
    )}
  />
)

LoginForm.propTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(LoginForm)
