import DetailPage from "./DetailPage"
import reducers from "../../reducers"
import { bindActionCreators } from "redux";
import { createPage } from "soya-next"
import actions from "../../actions";

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

export default createPage(mapStateToProps, mapDispatchToProps)(DetailPage, reducers)