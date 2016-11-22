export default function reducer(state={
    friends: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "RECEIVE_FRIENDS_SUCCESS": {
        return {...state, friends:action.payload, fetched: true}
      }
      case "RECEIVE_FRIENDS_ERROR": {
        return {...state, fetching: false, error: action.payload}
      }
    }

    return state
}
