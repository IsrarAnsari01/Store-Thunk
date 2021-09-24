import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../store/Actions/cakeAction";
import { useState } from "react";
export default function CakeComponent() {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(1);
  return (
    <>
      <h2>Number of Cakes - {numOfCake}</h2>
      <input type="number" onChange={(e) => setOrder(e.target.value)} />
      <button onClick={() => dispatch(buyCake(order))}>
        {" "}
        Buy {order} Cakes Now
      </button>
    </>
  );
}
