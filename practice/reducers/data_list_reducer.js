import { FETCH_NEWS_LIST_REQUEST,
         FETCH_NEWS_LIST_SUCCESS,
         FETCH_NEWS_LIST_FAILURE,
         CHANGE_NEWS_LIST_PAGE } from '../actions/index'

const initialState = {
  page: 1,
  status: null,
  dataList: [],
  error: null
}
//action return every piece of state
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_LIST_REQUEST:
      return {
        ...state,
        status: 'request'
      }
    case FETCH_NEWS_LIST_SUCCESS:
      return {
        ...state,
        status: 'success',
        dataList: action.response
      }
    case CHANGE_NEWS_LIST_PAGE:
      return {
        ...state,
        status: 'failure',
        error: action.error
      }
    default:
      return state;
  }
}
//choose action to return diff piece of state what action is
