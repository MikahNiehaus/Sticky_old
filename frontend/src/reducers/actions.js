const baseUrl = 'http://localhost:3000/api/v1/stickies';

export const fetchStickies = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_SICKIES'})
      fetch(baseUrl).then((response) => {
      response.json().then((data) => {
 
 console.log("data",data)
            dispatch({ type: 'GET_STICKIES', stickies: data })
     

      }).catch((err) => {
        console.log(err);
      })
    });
  }

  


//   fetch(this.baseUrl).then((response) => {
//     response.json().then((data) => {
//       console.log(data);

//     }).catch((err) => {
//       console.log(err);
//     })
}