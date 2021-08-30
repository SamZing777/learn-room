import * as actionType from './userType'

const initialState = {
    user: [],
    error:''
}

const userReducer = (state=initialState, action) => {
  switch (action.type){
    case actionType.GET_USER_SUCCESS:
      return{
        ...state,
        user: action.payload
      };
    case actionType.GET_USER_FAILURE:
      return {
        ...state,
        user: []
      };
    case actionType.GET_USER_LOGOUT:
      return {
        ...state,
        user: []
      }
    case actionType.GET_USER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;
