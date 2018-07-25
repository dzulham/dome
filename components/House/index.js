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
  image: PropTypes.array,
  name: PropTypes.string,
  rooms: PropTypes.number,
  size: PropTypes.number,
  windows: PropTypes.number,
  user: PropTypes.object
}

export default House