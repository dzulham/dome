import styles from "./Loading.module.css"
import PropTypes from "prop-types"

const Loading = (props) => (
  <div className={styles.loading}>
    {props.text || 'Loading...'}
  </div>
)

Loading.propTypes = {
  text: PropTypes.string
}

export default Loading