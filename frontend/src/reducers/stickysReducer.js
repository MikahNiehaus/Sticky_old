const  stickiesReducer = (state={stickies: [], loading: false}, action) => {
  // console.log("WE MADE IT INTO THE REDUCER, YAY! : ", action.type," : ", action.payload, state)
    switch (action.type){
      case 'POST_STICKY':
       
        state.stickies.push(action.stickies)
        return state
        // return {stickies: action.payload}
        break;
        case 'DELETE_STICKY':
          console.log("!!!DELETE!!!",state,action)
        state.stickies.splice(action.stickies)
        console.log("!!!splice!!!",state.stickies)
        return state
          break;
          case 'LOADING_STICKIES':
            return {
              ...state,
              stickies: [...state.stickies],
              loading: true
            }
            break;
        case 'GET_STICKIES':
          
          return {
            ...state,
            stickies: action.stickies,
            loading: false
          }
          
      default:
        return state
    }
  }
  export default stickiesReducer;