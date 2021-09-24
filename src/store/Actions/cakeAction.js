import { BUY_CAKE } from "../Types/cakeType";

export const buyCake = (numOfCake = 1) => {
  return {
    type: BUY_CAKE,
    payload: numOfCake,
  };
};
