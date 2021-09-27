import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_FAILURE,
  UPDAT_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
} from "../Types/postType.js";
const initialState = {
  fetchPostLoading: false,
  addPostLoading: false,
  updatePostLoading: false,
  deletePostLoading: false,
  posts: [],
  error: "",
  deleted: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, fetchPostLoading: true };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: [],
      };
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        posts: [...state.posts, action.payload],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        error: action.payload,
      };
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        updatePostLoading: true,
      };
    case UPDAT_POST_SUCCESS:
      return {
        ...state,
        updatePostLoading: false,
        posts: [...state.posts, action.payload],
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        updatePostLoading: false,
        error: action.payload,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        deletePostLoading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        deletePostLoading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
        deleted: true,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        deletePostLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postReducer;
