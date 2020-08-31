const baseUrl = 'http://localhost:3000/api/v1/stickies';

export const postSticky = (sticky) => {
  return (dispatch) => {
let myJson = (
 sticky
)
let configObj = {
  method: "PATCH",
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(myJson)
}
 dispatch({ type: 'LOADING_SICKIES'})
fetch(baseUrl+ '/' + sticky.id, configObj)
.then((response) => { response.json().then((data) => {
    dispatch({ type: 'PATCH_STICKY', stickies: data })
  }).catch((err) => {
    console.log(err);
  })
});

  }
}

