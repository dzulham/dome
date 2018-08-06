import SearchPanel from "../../components/SearchPanel"
import CardList from "../../components/CardList"
import PropTypes from "prop-types"
import React from "react"
import moment from "moment"

class SearchPage extends React.Component {

  static propTypes = {
    router: PropTypes.object.isRequired,
    houses: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      query: props.router.query.query || ""
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.findHouseWithQuery = this.findHouseWithQuery.bind(this)
  }

  handleSearch(query) {
    this.setState({ query })
  }

  findHouseWithQuery(houses) {
    const query = this.state.query.toLowerCase()
    const filtered = houses.filter((house) => {
      const details = [
        house.name,
        house.price,
        house.user.address
      ].join(' ').toLowerCase()

      return details.indexOf(query) !== -1
    })

    return filtered
  }

  render() {
    const { houses, router } = this.props

    const startTime = moment()
    const data = this.findHouseWithQuery(houses)
    const endTime = moment()
    const duration = moment.duration(endTime.diff(startTime))
    const queryTime = duration.asMilliseconds().toFixed(3)

    return (
      <React.Fragment>
        <SearchPanel
          placeholder="Search another home..."
          query={this.state.query}
          time={queryTime}
          amount={data.length}
          onSearch={this.handleSearch}
          router={router} />
        <CardList houses={data} />
      </React.Fragment>
    )
  }
}

export default SearchPage