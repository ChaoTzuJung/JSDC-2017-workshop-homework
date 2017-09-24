// import NewsList from '../actions/NewsList';
export const FETCH_NEWS_LIST_REQUEST = 'FETCH_NEWS_LIST_REQUEST';
export const FETCH_NEWS_LIST_SUCCESS = 'FETCH_NEWS_LIST_SUCCESS';
export const FETCH_NEWS_LIST_FAILURE = 'FETCH_NEWS_LIST_FAILURE';
export const CHANGE_NEWS_LIST_PAGE = 'CHANGE_NEWS_LIST_PAGE';

//Action Creator return obj(an action)with type property

export function fetchPosts() 
{
  return async (dispatch) => {
    dispatch({
      type: FETCH_NEWS_LIST_REQUEST
    });
    try {
      const httpResponse = await fetch(`/api/news/list/${page}`);
      if (httpResponse.status != 200) {
        throw new Error(`${httpResponse.status(httpResponse.statusText)}`);
      }
      dispatch({
        type: FETCH_NEWS_LIST_SUCCESS,
        response: await httpResponse.json()
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: FETCH_NEWS_LIST_FAILURE,
        error: error.message
      });
    }
  }
}

export function changePage(page, offset) {
      return {
        type: CHANGE_NEWS_LIST_PAGE,
        payload: { page }
      }
  
}
//action automatically sent to all reducers

