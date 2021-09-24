import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../Types/UserType";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchUsersError = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUser = async () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("After getting success", res.data);
        let users = res.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        let errMsg = err.message;
        dispatch(fetchUsersError(errMsg));
      });
  };
};
