import React from "react"
import House from "../../components/House"
import Loading from "../../components/Loading"
import { withRouter } from "next/router"
import PropTypes from "prop-types"

class HousePage extends React.Component {

  constructor(props) {
    super(props)

    this.findHouseById = this.findHouseById.bind(this)
  }

  static propTypes = {
    houses: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  }

  findHouseById() {
    const { houses, id } = this.props
    return houses.find(house => String(house.id) === id)
  }

  render() {
    const house = this.findHouseById()
    if(house) {
      const { photos, name, rooms, size, windows, user } = house
      return (
        <House
          image={photos}
          name={name}
          rooms={rooms}
          size={size}
          windows={windows}
          user={user} />
      )
    }
    return <Loading text="house not found." />
  }
}

export default withRouter(HousePage)