import Layout from "../../components/Layout"
import SearchPanel from "../../components/SearchPanel"
import CardList from "../../components/CardList"
import PropTypes from "prop-types"
import React from "react"

class SearchPage extends React.Component {
  
  static propTypes = {
    router: PropTypes.object.isRequired,
    houses: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      query: props.router.query.query || ""
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.reduceDataWithQuery = this.reduceDataWithQuery.bind(this)
  }

  handleSearch(query) {
    this.setState({ query })
  }

  reduceDataWithQuery(houses, users) {
    const query = this.state.query.toLowerCase()
    const reduced = houses.reduce(
      (result, h) => {
        const house = {
          ...h,
          user: users.find(u => u.id === h.ownerId)
        }
        
        const details = [
          house.name,
          house.price,
          house.user.address
        ].join(' ').toLowerCase()

        if(details.indexOf(query) !== -1) {
          result.push(house)
        }
        return result
      }, [])

    return reduced
  }

  render() {
    const { houses, users, router } = this.props

    const startTime = new Date()
    const data = this.reduceDataWithQuery(houses, users)
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