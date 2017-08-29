import appConstants from '../constants/appConstants';

module.exports = {
  // increment
  function increment(index) {
    return {
      type: appConstants.INCREMENT_LIKES,
      index
    }
  }

  // add comments
  function addComment(postId, author, comment){
    return {
      type: appConstants.ADD_COMMENTS,
      postId,
      author,
      comment
    }
  }

  // remove comments
  function removeComment(postId, i){
    return {
      type: appConstants.REMOVE_COMMENTS,
      postId,
      i
    }
  }
};
