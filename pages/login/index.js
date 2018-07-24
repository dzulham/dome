import { createPage } from "soya-next"
import Layout from "../../components/Layout"
import LoginForm from "../../components/LoginForm"

const LoginPage = () => (
  <Layout>
    <LoginForm />
  </Layout>
)

export default createPage()(LoginPage);
