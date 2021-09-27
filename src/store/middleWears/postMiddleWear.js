import axios from "axios";
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  addPostRequest,
  addPostSuccess,
  addPostError,
  updatePostRequest,
  updatePostSuccess,
  updatePostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
} from "../Actions/postAction.js";
/**
 * Fetch Posts From Database
 */
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        let posts = res.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((err) => {
        let errMsg = err.message;
        dispatch(fetchPostsError(errMsg));
      });
  };
};

/**
 * Add Posts In Database
 */

export const addPost = (data) => {
  return (dispatch) => {
    dispatch(addPostRequest);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        let posts = res.data;
        dispatch(addPostSuccess(posts));
      })
      .catch((err) => {
        let errMsg = err.message;
        dispatch(addPostError(errMsg));
      });
  };
};

/**
 * Update Posts In Database
 */

export const updatePost = (data, id) => {
  return (dispatch) => {
    dispatch(updatePostRequest);
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        let posts = res.data;
        dispatch(updatePostSuccess(posts));
      })
      .catch((err) => {
        let errMsg = err.message;
        dispatch(updatePostError(errMsg));
      });
  };
};

/**
 * Delete Post In Database
 */

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch(deletePostRequest);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        dispatch(deletePostSuccess(id));
      })
      .catch((err) => {
        let errMsg = err.message;
        dispatch(deletePostError(errMsg));
      });
  };
};
