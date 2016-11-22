import posts from '../api/posts'
import logggedInUser from '../api/user';

export function fetchPostsList() {
   return function(dispatch) {
      posts.getPosts(posts => {
        dispatch({type:'RECEIVE_POSTS_SUCCESS',payload:posts})
      })
  }
}

export function submitPost(newPost,user){
  var newPost = {"from": logggedInUser, "title" : newPost};
  return function(dispatch){
    posts.getPosts(posts => {
      posts.unshift(newPost);
      dispatch({type:'SUBMIT_POST',payload:posts})
    })
  }
}
