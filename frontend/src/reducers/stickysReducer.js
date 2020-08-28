export default function stickiesReducer(state={stickies: []}, action){
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
        fetch('http://localhost:3000/api/v1/stickies', configObj)
          .then((response) => {
            response.json().catch((err) => {
              console.log(err);
            })
          });
        return {stickies: action.payload}
      default:
        return state
    }
  }
  