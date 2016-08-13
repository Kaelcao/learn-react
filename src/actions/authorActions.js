import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return function (dispatch) {
    return authorApi.getAllAuthors()
      .then(authors => {
          dispatch(loadAuthorSuccess(authors));
        }
      ).catch(error => {
        throw(error);
      });
  };
}
