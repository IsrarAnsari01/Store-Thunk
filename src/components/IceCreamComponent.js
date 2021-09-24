import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../store/Actions/iceCreamAction";
export default function IceCreamComponent() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Number of IceCreams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}> Buy Now</button>
    </>
  );
}
