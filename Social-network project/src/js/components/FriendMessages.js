import React, {Component} from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button'
import {sendMessage} from "../actions/messageListActions"
import logggedInUser from '../api/user'

console.log('logggedInUser ',logggedInUser);

@connect((store) => {
  return {
    messagesList : store.messages.messages,
    messagesListLength : store.messages.messages.length,
    selectedFriend : store.messages.selectedFriend
  };
})

export default class FriendMessages extends Component {

  setColorForUser = (messageSender) => {
    if(messageSender === logggedInUser){
      return 'bg-light-gray'
    }
    else{
      return 'bg-gray'
    }
  }

  submitMessage = () => {
    this.props.dispatch(sendMessage(document.getElementById('send-message').value,this.props.selectedFriend))
  }



  render() {

    if(this.props.messagesList.length === 0){
        return <div></div>;
    }

      const mappedMessages = this.props.messagesList.map(message =>
            <div>
                  <div className = 'message-sender-friend-name'>{message.from}</div>
                  <div className = {this.setColorForUser(message.from)}>{message.text}</div>
            </div>)

    return (

          <div className = 'friends-messages-container'>
              <div className = 'selectedFriend'>{this.props.selectedFriend}</div>
              <div className = 'messages-title'>Messages</div>
              <div className = 'messages-list'>{mappedMessages}</div>
              <div className = 'send-message-title'>Write to {this.props.selectedFriend}</div>
              <textarea id = 'send-message' rows="3" cols="56"></textarea>
              <Button bsStyle="primary" className = "send-button" onClick = {this.submitMessage}>Send</Button>
          </div>
    )
  }
}
