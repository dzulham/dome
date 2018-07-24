import reducers from "../../reducers"
import { bindActionCreators } from "redux";
import { createPage } from "soya-next"
import actions from "../../actions";
import SearchPage from "./SearchPage";
import HousePage from "./HousePage";

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
      viewing: false
    }
  }

  componentDidMount() {
    this.props.fetchHouses()
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        {
          this.state.viewing &&
          <HousePage {...this.props} /> ||
          <SearchPage {...this.props} />
        }
      </div>
    )
  }
}
export default createPage(mapStateToProps, mapDispatchToProps)(Houses, reducers)