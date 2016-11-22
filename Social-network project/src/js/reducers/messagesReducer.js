export default function reducer(state={
    messages: [],
    selectFriend:null,
    fetched: false,
    error: null,
    newMessageSent : null
  }, action) {

    switch (action.type) {

      case "RECEIVE_MESSAGE_SUCCESS":
        return {...state, messages:action.payload, selectedFriend:action.selectedFriend, fetched: true}
        break;
      case "SEND_MESSAGE_SUCCESS":
        return {...state, messages:action.payload, selectedFriend:action.selectedFriend, newMessageSent: true}
            
    }

    return state
}
