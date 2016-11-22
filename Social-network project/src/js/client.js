import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { Router, Route, browserHistory,useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createHistory, useBeforeUnload } from 'history'

import Layout from "./components/Layout"
import FriendsContainer from "./components/FriendsContainer"
import PostContainer from './components/PostContainer'

import store from "./store"

const app = document.getElementById('app')
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
       <Route path="/" component={Layout}>
          <Route path="/friends" component={FriendsContainer}/>
          <Route path="/posts" component={PostContainer}/>
       </Route>
  </Router>
</Provider>, app);
