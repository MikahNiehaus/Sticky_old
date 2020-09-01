const baseUrl = 'http://localhost:3000/api/v1/stickies';
export const getStickies = () => {
    return (dispatch) => {
      fetch(baseUrl).then((response) => {
      response.json().then((data) => {
        dispatch({ type: 'GET_STICKIES', stickies: data })
      }).catch((err) => {
        console.log(err);
      })
    });
  }


}