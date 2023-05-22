import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Action/counterAction";

const Counter = () => {
  const counterSlice = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increment());
  };

  const subtract = () => {
    dispatch(decrement());
  };

  return (
    <center style={{ marginTop: "40vh" }}>
      <button onClick={subtract}>-</button> Counter value:{" "}
      {counterSlice.counterValue} <button onClick={add}>+</button>
    </center>
  );
};

export default Counter;
