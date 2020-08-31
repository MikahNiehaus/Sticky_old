const  stickiesReducer = (state={stickies: [], loading: false}, action) => {
   console.log("WE MADE IT INTO THE REDUCER, YAY! : ", action.type," : ", action.payload,"state", state)
    switch (action.type){
      case 'POST_STICKY':
        state.stickies.push(action.stickies)
        return state;
        break;

        case 'DELETE_STICKY':
        return state;
          break;

          case 'LOADING_STICKIES':
            return {
              ...state,
              stickies: [...state.stickies],
              loading: true
            };
            break;

        case 'GET_STICKIES':
          return {
            ...state,
            stickies: action.stickies,
            loading: false
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
  export default stickiesReducer;