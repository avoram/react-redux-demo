import React from "react"
import { connect } from "react-redux"
import {fetchFriendsList} from "../actions/friendsListActions"
import { browserHistory } from 'react-router'

import Header from './Header'
import FriendsContainer from './FriendsContainer'

@connect((store) => {
  return {

  };
})
export default class Layout extends React.Component {

  componentDidMount(){
    this.getFriendsList();
  }

  getFriendsList = () => {
    browserHistory.push(`/friends`)
  }

  render() {
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
