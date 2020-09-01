 import cuid from 'cuid';
 export const cuidFn = cuid;

export default function stickiesReducer(state = {stickies: []}, action) {

   console.log("!!!REDUCER!!! state:" , state,"action:", action)
    switch (action.type){
      case 'POST_STICKY':
       const sticky = { body: action.stickies.body, important: action.stickies.important, id: action.stickies.id };
       return state
        // return {
        //   ...state,
        //   stickies: [ ...state.stickies, sticky]
        // }
        // return [...state.stickies, action.stickies]
        break;

        case 'DELETE_STICKY':
        return state;
          break;


        case 'GET_STICKIES':
          return {
            ...state,
            stickies: action.stickies,
          };
          break;

          case 'PATCH_STICKY':
            state.stickies = state.stickies.filter(item => item.id !== action.stickies.id);
            state.stickies.push(action.stickies);
            return state;
      default:
        return state;
    }
  }
  // export default stickiesReducer;