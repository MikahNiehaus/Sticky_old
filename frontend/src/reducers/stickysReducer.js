export default function stickiesReducer(state={stickies: [], loading: false}, action){
  const baseUrl = 'http://localhost:3000/api/v1/stickies';
  console.log("WE MADE IT INTO THE REDUCER, YAY! : ", action.type," : ", action.payload)
  
    switch (action.type){
      case 'ADD_STICKY':
        console.log("action.payload",action.payload)
        let myJson = ({
          sticky: {
            body: action.payload,
            important: false
          }
        })
        let configObj = {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accepts": "application/json" },
          body: JSON.stringify(myJson)
        }
        fetch(baseUrl, configObj)
          .then((response) => {
            response.json().catch((err) => {
              console.log(err);
            })
          });
        return {stickies: action.payload}
        break;
        case 'DELETE_STICKY':
          console.log("delete id is",action.payload)
          fetch(baseUrl + '/' + action.payload.toString(), {
            method: 'delete'
          }).then(response =>
            response.json().then(json => {
              return json;
            })
          );
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
  