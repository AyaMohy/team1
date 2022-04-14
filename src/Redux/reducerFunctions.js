//reducer function for posts fetch
export function postsReducer(state,action){

    switch(action.type){
  
      case"fetched":
      return {...state,postsList:[...action.payload]};
      default:
        return state;
  
    }
  } 

export function authorsReducer(state,action){

    switch(action.type){
  
      case"fetched":
      return {...state,authorsList:[...action.payload]};
      default:
        return state;
  
    }
  } 


export function commentsReducer(state,action){

    switch(action.type){
  
      case"fetched":
      return {...state,commentsList:[...action.payload]};
      default:
        return state;
  
    }
  }