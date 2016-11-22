import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchMessageList} from '../actions/messageListActions'
import Image from 'react-bootstrap/lib/Image'

@connect((store) => {
  return {
    friends : store.friends.friends
  };
})

export default class FriendsList extends Component {

  fetchMessages = (e) => {
    this.props.dispatch(fetchMessageList(e.target.attributes.id.value))
  }

  render() {
    const mappedFriends = this.props.friends.map(friend => <div className = 'show-friends'><div><Image onClick={this.fetchMessages.bind(this)} className = 'friend-list' id = {friend.name} src={friend.photo} rounded /></div><div className = 'friend-name'>{friend.name}</div></div>)
    return (
      <div>
          {mappedFriends}
      </div>
    )
  }
}
