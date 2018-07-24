import { Component } from "react"
import PropTypes from "prop-types"
import styles from "./CardList.module.css"
import "../../styles/global.css"
import Card from "../Card"

class CardList extends Component {
  
  static propTypes = {
    houses: PropTypes.array.isRequired,
    status: PropTypes.object.isRequired
  }

  render() {
    const { fetching, error } = this.props.status

    return (
      <div className={styles.cardlist}>
        { 
          fetching &&
          <div className={styles.notice}>{'fetching...'}</div> ||

          error &&
          <div className={styles.notice}>{error}</div> ||

          this.props.houses.map((house) => {
            return (
              <Card
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
