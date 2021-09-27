import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  UPDATE_POST_REQUEST,
  UPDATE_POST_FAILURE,
  UPDAT_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
} from "../Types/postType";

/**
 * Fetch Post Request
 * @returns object type
 */
export const fetchPostsRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

/**
 * Fetch Post Success
 * @returns object type and payload
 */

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};

/**
 * Fetch Post Error
 * @returns object type and error
 */

export const fetchPostsError = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

/**
 * Add Post Request
 * @returns object type
 */

export const addPostRequest = () => {
  return {
    type: ADD_POST_REQUEST,
  };
};

/**
 * Add Post Success
 * @returns object type, postData
 */

export const addPostSuccess = (data) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: data,
  };
};

/**
 * Add Post Failure
 * @returns object type, errorMsg
 */

export const addPostError = (error) => {
  return {
    type: ADD_POST_FAILURE,
    payload: error,
  };
};

/**
 * Update Post Reqest
 * @returns object type
 */

export const updatePostRequest = () => {
  return {
    type: UPDATE_POST_REQUEST,
  };
};

/**
 * Update Post Success
 * @returns object type, postData
 */

export const updatePostSuccess = (data) => {
  return {
    type: UPDAT_POST_SUCCESS,
    payload: data,
  };
};

/**
 * Add Post Failure
 * @returns object type, errorMsg
 */

export const updatePostError = (error) => {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error,
  };
};

/**
 * Delete Post Reqest
 * @returns object type
 */

export const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
  };
};

/**
 * Delete Post Success
 * @returns object type, postData
 */

export const deletePostSuccess = (data) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: data,
  };
};

/**
 * Add Post Failure
 * @returns object type, errorMsg
 */

export const deletePostError = (error) => {
  return {
    type: DELETE_POST_FAILURE,
    payload: error,
  };
};
