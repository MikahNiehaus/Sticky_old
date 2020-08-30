const baseUrl = 'http://localhost:3000/api/v1/stickies';

export const deleteSticky = (id) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_SICKIES'})
      fetch(baseUrl + '/' + id.toString(), {
        method: 'delete'
      }).then((response) => {
      response.json().then((data) => {
 
 console.log("data",data)
           dispatch({ type: 'DELETE_STICKY', stickies: id})
     

      }).catch((err) => {
        console.log(err);
      })
    });
  }
}