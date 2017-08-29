import appConstants from '../constants/appConstant';

// increment
export function increment(index) {
  return {
    type: appConstants.INCREMENT_LIKES,
    index
  }
}

// add comments
export function addComment(postId, author, comment){
  return {
    type: appConstants.ADD_COMMENTS,
    postId,
    author,
    comment
  }
}

// remove comments
export function removeComment(postId, i){
  return {
    type: appConstants.REMOVE_COMMENTS,
    postId,
    i
  }
}
