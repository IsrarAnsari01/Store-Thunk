import { combineReducers } from "redux";
import cakeReducer from "../Reducers/cakeReducer";
import iceCreamReducer from "../Reducers/iceCreamReducer";
import userReducer from "../Reducers/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  User: userReducer,
});

export default rootReducer;
