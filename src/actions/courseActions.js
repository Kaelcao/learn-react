import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSE_SUCCESS, courses};
}

function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}
function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses()
      .then(courses => {
          dispatch(loadCoursesSuccess(courses));
        }
      ).catch(error => {
        throw(error);
      });
  };
}

export function saveCourse(course) {

  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  }
}
