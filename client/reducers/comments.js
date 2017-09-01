
import appConstant from '../constants/appConstant';
function postComments(state = [], action) {

  switch (action.type){
    case appConstant.ADD_COMMENTS :
      // returns a new state with new comment
      return[...state, {
          user: action.author,
          text: action.comment
        }
      ]

    case appConstant.REMOVE_COMMENTS :
       // returns a new state without the deleted comment
       return[
         ...state.slice(0, action.i),
         ...state.slice(action.i + 1)
       ]

    default:
      return state;
  }
}

function comments(state = [], action) {
  console.log(state);
  console.log(action);
  if ( action.postId !== undefined) {
    return{
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
