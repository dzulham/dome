import PropTypes from "prop-types"
import styles from "./SearchPanel.module.css"
import "../../styles/global.css"

const SearchInput = (props) => (
  <input className={styles.input} type="text"
    placeholder={props.placeholder}
    onChange={props.onHandleChange}
    onKeyUp={props.onHandleKeyUp}
    value={props.query} 
    autoFocus />
)

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string,
  onHandleKeyUp: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired
}

export default SearchInput
