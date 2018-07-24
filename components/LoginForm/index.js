import styles from "./LoginForm.module.css"
import "../../styles/global.css"
import { Formik, Form, Field } from "formik"
import { withRouter } from "next/router"
import PropTypes from "prop-types"

const LoginForm = (props) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    
    onSubmit={(values, actions) => {
      setTimeout(() => {
        props.router.push("/houses?query=" + values.username)
        actions.setSubmitting(false)
      }, 1000)
    }}
    
    validate={values => {
      const errors = {}
        if (!values.username) {
          errors.username = 'Required'
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        return errors
    }}
    
    render={({ errors, touched, isSubmitting }) => (
      <Form className={styles.login}>
        <Field type="text" name="username" placeholder={'Username'}/>
        <Field type="password" name="password" placeholder={'Password'}/>
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
