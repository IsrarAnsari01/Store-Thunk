import { combineReducers } from "redux";
import cakeReducer from "../Reducers/cakeReducer";
import iceCreamReducer from "../Reducers/iceCreamReducer";
import userReducer from "../Reducers/UserReducer";
import postReducer from "../Reducers/postReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  User: userReducer,
  post: postReducer,
});

export default rootReducer;
