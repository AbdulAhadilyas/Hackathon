export const reducer = (state, action) => {
    switch (action.type) {
  
      case "USER_LOGIN": {
        return { ...state, isLogin:true }
      }
      case "USER": {
        return { ...state, user:action.payload}
      }
      case "USER_LOGOUT": {
        return { ...state, isLogin:false } // set this to null on purpose, do not change
      }
      default: {
        return state
      }
    }
  }