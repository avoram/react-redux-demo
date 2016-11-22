import React, { Component, PropTypes } from 'react'
import {connect} from "react-redux"
import Image from 'react-bootstrap/lib/Image'
import { browserHistory } from 'react-router'
import {fetchFriendsList} from "../actions/friendsListActions"
import {fetchPostsList} from '../actions/PostActions'

@connect((store) => {
  return {

  };
})

export default class SelectFriendsPosts extends Component {

  handlePostSelectAction = () => {
    this.props.dispatch(fetchPostsList())
    browserHistory.push(`/posts`)
  }

  handleFriendSelectAction = () => {
    this.props.dispatch(fetchFriendsList())
    browserHistory.push(`/friends`)
  }

  render() {
    return (
          <div>
              <div onClick = {this.handleFriendSelectAction} className = 'friend-post-icon-container'>
                <Image className = 'icon-friends-posts' src="https://cdn1.iconfinder.com/data/icons/user-experience/512/friends-512.png" circle />
                <span className = 'friend-post-icon'>My Friends</span>
              </div>
              <div onClick = {this.handlePostSelectAction} className = 'friend-post-icon-container'>
                <Image className = 'icon-friends-posts' src="http://techtwisted.com/wp-content/uploads/2015/10/blackberry-icon.jpg" circle />
                <span className = 'friend-post-icon'>My Posts</span>
              </div>
          </div>
    )
  }
}
