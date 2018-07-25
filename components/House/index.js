import Rating from "../Rating"
import styles from "./House.module.css"
import PropTypes from "prop-types"

const House = (props) => (
  <div className={styles.house}>
    <img src={props.image} alt={props.name}/>
    <div>
      <h1>{props.name}</h1>
      <div>
        <p>{props.rooms + ' Rooms'}</p>
        <p>{props.size + ' Sq m'}</p>
        <p>{props.windows + ' Windows'}</p>
      </div>
      <div>
        {JSON.stringify(props.user)}
      </div>
      <Rating star={4} max={5} />
    </div>
  </div>
)

House.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  windows: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired
}

export default House