import { Component } from "react"
import PropTypes from "prop-types"
import styles from "./CardList.module.css"
import "../../styles/global.css"
import Card from "../Card"
import Router from "next/router"

class CardList extends Component {
  
  static propTypes = {
    houses: PropTypes.array.isRequired
  }

  render() {

    return (
      <div className={styles.cardlist}>
        { 
          this.props.houses.map((house) => {
            return (
              <Card
                onClick={() => {
                  Router.push("/houses?id=" + house.id)
                }}
                key={house.id}
                title={house.name}
                image={house.photos}
                detail={house.user.address}
                price={house.price} />
            )
          })
        }
      </div>
    )
  }
}

export default CardList
