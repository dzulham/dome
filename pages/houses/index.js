import reducers from "../../reducers"
import { bindActionCreators } from "redux";
import { createPage } from "soya-next"
import actions from "../../actions";
import SearchPage from "./SearchPage";
import HousePage from "./HousePage";
import Loading from "../../components/Loading"
import PropTypes from "prop-types"
import React from "react"
import { withRouter } from "next/router"

class Houses extends React.Component {

  static propTypes = {
    router: PropTypes.object.isRequired,
    houses: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    fetchHouses: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      viewing: props.router.query.house
    }
  }

  componentDidMount() {
    this.props.fetchHouses()
    this.props.fetchUsers()
  }

  render() {
    const { router } = this.props
    const { data: houses, isFetching: houseFetching, error: houseError } = this.props.houses
    const { data: users, isFetching: userFetching, error: userError } = this.props.users
    
    const fetching = houseFetching || userFetching
    const error = userError || houseError

    const house = houses.reduce((result, h) => {
      if(String(h.id) === router.query.house) {
        const _house = {
          ...h,
          user: users.find(u => u.id === h.ownerId)
        }
        result[_house.id] = _house
      }
      return result
    }, [])[router.query.house] || {}
    const viewing = this.props.router.query.house

    return (
      <div>
        {
          fetching && <Loading text="fetching..." /> ||
          error && <Loading text="an error occured" /> ||
          viewing &&
          <HousePage house={house} /> ||
          <SearchPage houses={houses} users={users} router={router} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    houses: state.houses,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHouses: bindActionCreators(actions.houses.fetchHouses, dispatch),
    fetchUsers: bindActionCreators(actions.users.fetchUsers, dispatch)
  }
}

export default createPage(mapStateToProps, mapDispatchToProps)
                          (withRouter(Houses), reducers)