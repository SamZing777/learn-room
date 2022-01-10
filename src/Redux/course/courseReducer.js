import * as actionType from './courseType'

const initialState = {
    courses: [],
    error:'',
    loading: true
}

const courseReducer = (state=initialState, action) => {
  switch (action.type){
    case actionType.GET_COURSE_SUCCESS:
      return{
        ...state,
        courses: action.payload
      };
    case actionType.GET_COURSE_FAILURE:
      return {
        error: action.payload
      };
    default:
      return state;
  }
}

export default courseReducer;
