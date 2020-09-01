const baseUrl = 'http://localhost:3000/api/v1/stickies';

export const deleteSticky = (id) => {
  console.log("!!!!!ID!!!",id)
    return (dispatch) => {
      fetch(baseUrl + '/' + id.toString(), {
      method: 'delete'
    }).then((response) => {
      response.json().then((data) => {
 
         //  dispatch({ type: 'DELETE_STICKY', stickies: id})
     

      }).catch((err) => {
        console.log(err);
      })
    });
  }
}