import friends from '../api/friends'

export function fetchFriendsList() {
   return function(dispatch) {
      friends.getFriends(friends => {
        dispatch({type:'RECEIVE_FRIENDS_SUCCESS',payload:friends})
      })
  }
}
