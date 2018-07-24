import { createPage } from "soya-next"
import Wrapper from "../components/Wrapper"
import Brand from "../components/Brand"
import Layout from "../components/Layout"
import SearchBox from "../components/SearchBox"

const HomePage = () => (
  <Layout>
    <Wrapper>
      <Brand title="Dome" />
      <SearchBox placeholder="Find your dream home now..." />
    </Wrapper>
  </Layout>
)

export default createPage()(HomePage)
