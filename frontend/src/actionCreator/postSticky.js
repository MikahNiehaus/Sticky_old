const baseUrl = 'http://localhost:3000/api/v1/stickies';

export const postSticky = (text) => {
  return (dispatch) => {
let myJson = (
 text
)
let configObj = {
  method: "POST",
  headers: { "Content-Type": "application/json", "Accepts": "application/json" },
  body: JSON.stringify(myJson)
}
fetch(baseUrl, configObj)
.then((response) => { 
   response.json().then((data) => {
    dispatch({ type: 'POST_STICKY', sticky: data })


  }).catch((err) => {
    console.log(err);
  })
});

  }
}
