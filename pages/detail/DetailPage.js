import React from "react"
import Layout from "../../components/Layout"
import { withRouter } from "next/router"

class DetailPage extends React.Component {

  componentDidMount() {
    this.props.fetchHouses()
    this.props.fetchUsers()
  }

  render() {
    const { data: houses, isFetching: houseFetching, error: houseError } = this.props.houses
    const { data: users, isFetching: userFetching, error: userError } = this.props.users
    
    const isFetched = !houseFetching && !userFetching
    const IsNotError = !houseError && !userError

    const housesUsers = houses.map((house) => {
      return {
        ...house,
        user: users.find(u => u.id === house.ownerId)
      }
    })

    return (
      <Layout>
        {
          isFetched && IsNotError &&
          <p>{JSON.stringify(housesUsers)}</p> ||
          <p>...</p>
        }
      </Layout>
    )
  }
}

export default withRouter(DetailPage)