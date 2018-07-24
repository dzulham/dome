import PropTypes from "prop-types"
import styles from "./SearchPanel.module.css"
import "../../styles/global.css"

const SearchData = (props) => (
  <div className={styles.data}>
    {props.query &&
      <p>{'Result for'}
          <span className={styles.query}> {props.query}</span>
      </p>
    }
    {props.query ?
      <p>{'Found ' + props.amount + ' result(s) in'}
          <span className={styles.time}> {props.time}</span>
      </p> :
      <p onClick={props.onHandleNoQuery}>{'Try typing in something!'}</p>
    }
  </div>
)

SearchData.propTypes = {
  query: PropTypes.string,
  amount: PropTypes.number,
  time: PropTypes.string,
  onHandleNoQuery: PropTypes.func
}

export default SearchData