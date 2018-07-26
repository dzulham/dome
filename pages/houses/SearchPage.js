import Layout from "../../components/Layout"
import SearchPanel from "../../components/SearchPanel"
import CardList from "../../components/CardList"
import PropTypes from "prop-types"
import React from "react"

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

    const startTime = new Date()
    const data = this.findHouseWithQuery(houses)
    const endTime = new Date()
    const queryTime = (endTime - startTime).toFixed(3)

    return (
      <Layout>
        <SearchPanel
          placeholder="Search another home..."
          query={this.state.query}
          time={queryTime}
          amount={data.length}
          onSearch={this.handleSearch}
          router={router} />
        <CardList houses={data} />
      </Layout>
    )
  }
}

export default SearchPage