const baseUrl = 'http://localhost:3000/api/v1/stickies';

export const deleteSticky = (id) => {
    return (dispatch) => {
      fetch(baseUrl + '/' + id.toString(), {
      method: 'delete'
    }).then((response) => {
      response.json().then((data) => {
 
        dispatch({ type: 'DELETE_STICKY', stickies: data})
     

      }).catch((err) => {
        console.log(err);
      })
    });
  }
}