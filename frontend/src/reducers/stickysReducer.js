export default function stickiesReducer(state={stickies: []}, action){
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
        case 'GET_STICKIES':
          fetch(baseUrl).then((response) => {
            response.json().then((data) => {
              console.log("GET_STICKIES!",data);
             return data;
            }).catch((err) => {
              console.log(err);
              return state
            })
          });
          
      default:
        return state
    }
  }
  