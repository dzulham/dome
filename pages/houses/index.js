import reducers, { isLoading, hasError, mapHouseWithUsers } from "../../reducers"
import { bindActionCreators } from "redux";
import { createPage } from "soya-next"
import actions from "../../actions";
import SearchPage from "./SearchPage";
import HousePage from "./HousePage";
import Loading from "../../components/Loading"
import Layout from "../../components/Layout"
import PropTypes from "prop-types"
import React from "react"
import { withRouter } from "next/router"

class Houses extends React.Component {

  static propTypes = {
    router: PropTypes.object.isRequired,
    houses: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    fetchHouses: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      viewing: props.router.query.id
    }
  }

  componentDidMount() {
    this.props.fetchHouses()
    this.props.fetchUsers()
  }

  render() {
    const { router, houses, isLoading, error } = this.props
    const viewing = this.props.router.query.id

    return (
      <Layout>
        {
          isLoading && <Loading text="fetching..." /> ||
          error && <Loading text="an error occured." /> ||
          viewing &&
          <HousePage houses={houses} id={router.query.id} /> ||
          <SearchPage houses={houses} router={router} />
        }
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    houses: mapHouseWithUsers(state),
    isLoading: isLoading(state),
    error: hasError(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHouses: bindActionCreators(actions.houses.fetchHouses, dispatch),
    fetchUsers: bindActionCreators(actions.users.fetchUsers, dispatch)
  }
}

export default createPage(mapStateToProps, mapDispatchToProps)(withRouter(Houses), reducers)