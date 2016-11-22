import { combineReducers } from "redux"
import {routerReducer } from 'react-router-redux'
import friends from "./friendsListReducer"
import messages from './messagesReducer'
import posts from './postsReducer'

export default combineReducers({
  friends,
  messages,
  posts,
  routing: routerReducer
})
