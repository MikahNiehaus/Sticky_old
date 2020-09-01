const baseUrl = 'http://localhost:3000/api/v1/stickies';
export const getStickies = () => {
    return (dispatch) => {
      fetch(baseUrl).then((response) => {
      response.json().then((stickies) => {
        //   dispatch({ type: 'GET_STICKIES', stickies: data })
        dispatch({type: 'GET_STICKIES', stickies})
      }).catch((err) => {
        console.log(err);
      })
    });
  }


}