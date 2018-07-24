import Head from "next/head"
import PropTypes from "prop-types"
import styles from "./Layout.module.css"
import "../../styles/global.css"
import React from 'react'

class Layout extends React.Component {

  render(){
    const { children } = this.props;
    return (
      <div className={styles.layout}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/static/favicon.ico" rel="shortcut icon"/>
          <link href="https://fonts.googleapis.com/css?family=Heebo" rel="stylesheet"/>
          <title>{'Dome'}</title>    
        </Head>
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
