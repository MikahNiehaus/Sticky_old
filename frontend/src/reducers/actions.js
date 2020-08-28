const ADD_STICKY = "ADD_STICKY"

export function fetchStickies(dogBookArray){
    console.log("dogBookArray",dogBookArray)
  //WHAT'S THE PROBLEM WHEN TRYING TO WRITE THE FETCH IN THE ACTION?
  //WE DIDN'T HAVE DISPATCH
  //THUNK ALLOWS DISPATCH (THE FUNCTION FROM THE STORE) TO NOW ACCEPT _EITHER_ OBJECTS _OR_ FUNCTIONS
  //IF IT'S AN OBJECT, DISPATCH WILL DO WHAT IT'S SUPPOSED TO DO: USE THE ACTION TO CHANGE THE STORE
  //IF THE ARGUMENT IS A _FUNCTION_, IT WILL INVOKE IT, AND PASS IT DISPATCH AGAIN

  //SO NOW WE CAN WRITE TWO TYPES OF ACTION CREATORS
  //ONES THAT RETURN OBJECTS (CLASSIC)
  //ONES THAT RETURN FUNCTIONS THAT GET INVOKED AND PASSED DISPATCH AGAIN (THUNK)
  return function(dispatch){
    //we need dispatch inside of this function because it is a fetch, which will always return a promise
    //so using dispatch inside of it gets around the fact that it will only return a promise
    //that's why it's considered ASYNC Redux, because you will only return action creators that are functions if you are making a fetch request and need to change the redux store's state with the values received in the fetch 
    // fetch("https://www.googleapis.com/books/v1/volumes?q=dogs")
    //   .then(res => res.json())
    //   .then(booksObj => {
    //     dispatch({type: ADD_BOOKS, payload: booksObj.items})
    //   })

    //   createNote(input, id) {
    //     let data = ({
    //       note: {
    //         body: input,
    //         subject_id: id,
    //       }
    //     })
    
       }


    
}
