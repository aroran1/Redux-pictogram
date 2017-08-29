// a reducer takes in 2 things
// 1. the action (info about what happened)
// 2. copy of current state

import appConstant from '../constants/appConstant';

 function posts(state = [], action) {
   switch (action.type){
      case appConstant.INCREMENT_LIKES :
        console.log('Incrementing likes!');
        const i = action.index;
        return [
          ...state.slice(0, i),     // before the matched index
          {...state[i], likes: state[i].likes + 1},
          ...state.slice(i + 1)     // after the matched index
        ]
    default:
      return state;
   }
}

 export default posts;
