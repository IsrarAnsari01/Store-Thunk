import axios from "axios";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
} from "../Actions/UserAction";
export const fetchUser = () => {
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
