export default function reducer(state={
    posts: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "RECEIVE_POSTS_SUCCESS": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          posts: action.payload,
        }
        break
      }

      case "SUBMIT_POST" : {
        return {
          ...state,
          posts:action.payload
        }
      }

    }

    return state
}
