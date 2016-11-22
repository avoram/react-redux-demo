import React, { Component, PropTypes } from 'react'
import SelectFriendsPosts from './SelectFriendsPosts'
import FriendsList from './FriendsList'
import FriendMessages from './FriendMessages'
import {fetchFriendsList} from "../actions/friendsListActions"
import { connect } from "react-redux"
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

@connect((store) => {
  return {

  };
})

export default class FriendsContainer extends Component {

  componentWillMount(){
    this.props.dispatch(fetchFriendsList())
  }

  render() {
    return (
      <div>
        <Grid>
            <Row className="show-grid">
              <Col xs={12} md={3}><SelectFriendsPosts /></Col>
              <Col xs={12} md={3}><FriendsList /></Col>
              <Col xs={12} md={6}><FriendMessages /></Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
