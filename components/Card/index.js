import { Component } from "react"
import PropTypes from "prop-types"
import styles from "./Card.module.css"
import "../../styles/global.css"
import Rating from "../Rating"

class Card extends Component 
{
  static propTypes = {
    image: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    detail: PropTypes.string,
    price: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { image, title, detail, price } = this.props
    const formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 

    return (
      <div className={styles.card}>
        <img src={image} alt={image} />
        <h3>{title}</h3>
        <div className={styles.detail}>
          <div className={styles.data}>
            <p>{detail}</p>
            <Rating star={4} max={5} /> {/* Still hardcoded */} 
          </div>
          <span className={styles.price}>
            {formattedPrice}
          </span>
        </div>
      </div>
    )
  }
}

export default Card
