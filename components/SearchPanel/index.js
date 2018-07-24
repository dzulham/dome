import { Component } from "react"
import PropTypes from "prop-types"
import styles from "./SearchPanel.module.css"
import "../../styles/global.css"

import SearchData from "./SearchData"
import SearchInput from "./SearchInput"

class SearchPanel extends Component
{
  static propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func.isRequired, 
    time: PropTypes.string.isRequired, 
    amount: PropTypes.number.isRequired, 
    query: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      searching: !props.query
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState((prevState) => {
      return { searching: !prevState.searching }
    })
  }

  render() {

    const { placeholder, onSearch, time, amount, query } = this.props
    const { searching } = this.state

    return (
      <div className={styles.panel}> 
        {searching?

          <SearchInput 
            onHandleChange={e => onSearch(e.target.value)}
            onHandleKeyUp={e => e.key === "Enter" && this.handleToggle()}
            placeholder={placeholder}
            query={query} /> :
            
          <SearchData 
            query={query} 
            amount={amount} 
            time={time}
            onHandleNoQuery={this.handleToggle} /> 
        }
        <button className={styles.button} onClick={this.handleToggle} type="submit" />
      </div>
    );
  }
}

export default SearchPanel