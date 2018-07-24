import { Component } from "react"
import styles from "./Rating.module.css";
import PropTypes from "prop-types";
import "../../styles/global.css";

class Rating extends Component {
  
  static propTypes = {
    star: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  render() {

    const { star, max } = this.props
    const stars = []

    for(let i = 0; i < max; i++) {
      stars.push(<div key={i} 
        className={i < star? styles.star : styles.dimStar} />)
    }

    return (
      <div className={styles.rating}>
        {stars}
      </div>
    )
  }
}

export default Rating;
