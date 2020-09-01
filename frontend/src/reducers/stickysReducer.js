 import cuid from 'cuid';
 export const cuidFn = cuid;

export default function stickiesReducer(state = {stickies: []}, action) {
const yo = {
  ...state,
  stickies: [ ...state.stickies, action.sticky]
};
   console.log("!!!REDUCER!!! state:" ,{stickies: action.stickies} ,"action:", {stickies: action.stickies})
    switch (action.type){
      case 'POST_STICKY':
         return {
          ...state,
          stickies: [ ...state.stickies, action.sticky]
        };
       
        break;

        case 'DELETE_STICKY':
          return {stickies: action.stickies}
          break;


        case 'GET_STICKIES':
          return {stickies: action.stickies}
          // return {
          //   ...state,
          //   stickies: action.stickies,
          // };
          break;

          // case 'PATCH_STICKY':
          //   state.stickies = state.stickies.filter(item => item.id !== action.stickies.id);
          //   state.stickies.push(action.stickies);
          //   return state;
      default:
        return state;
    }
  }
  // export default stickiesReducer;