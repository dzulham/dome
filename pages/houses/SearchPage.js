import Layout from "../../components/Layout"
import SearchPanel from "../../components/SearchPanel"
import CardList from "../../components/CardList"
import { withRouter } from "next/router"
import PropTypes from "prop-types"
import React from "react"

class SearchPage extends React.Component {
  
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
    const { data: houses, isFetching: houseFetching, error: houseError } = this.props.houses
    const { data: users, isFetching: userFetching, error: userError } = this.props.users
    
    const isFetched = !houseFetching && !userFetching
    const IsNotError = !houseError && !userError

    let data = [], queryTime = "0.000"
    if(isFetched && IsNotError) {
      const startTime = new Date()
      data = this.reduceDataWithQuery(houses, users)
      const endTime = new Date()
      queryTime = (endTime - startTime).toFixed(3)
    }

    return (
      <Layout>
        <SearchPanel
          placeholder="Search another home..."
          query={this.state.query}
          time={queryTime}
          amount={data.length}
          onSearch={this.handleSearch} />
        <CardList
          houses={data}
          status={{
            fetching: !isFetched,
            error: houseError || userError
          }} />
      </Layout>
    )
  }
}

export default withRouter(SearchPage)