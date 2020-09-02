export default function stickiesReducer(state = {stickies: []}, action) {

    switch (action.type){

      case 'POST_STICKY':
         return {
          ...state,
          stickies: [ ...state.stickies, action.sticky]
        };
       
        case 'DELETE_STICKY':
          return {stickies: action.stickies}

        case 'GET_STICKIES':
          return {stickies: action.stickies}

      default:
        return state;
    }
  }