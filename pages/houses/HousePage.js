import React from "react"
import Layout from "../../components/Layout"
import House from "../../components/House"
import { withRouter } from "next/router"
import PropTypes from "prop-types"

class HousePage extends React.Component {
  
  static propTypes = {
    house: PropTypes.object.isRequired
  }

  render() {

    const { photos, name, rooms, size, windows, user } = this.props.house
    
    return (
      <Layout>
        {
          <House
            image={photos} 
            name={name}
            rooms={rooms}
            size={size}
            windows={windows}
            user={user} />
        }
      </Layout>
    )
  }
}

export default withRouter(HousePage)