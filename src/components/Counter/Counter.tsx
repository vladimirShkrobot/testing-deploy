import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../store/selectors/counter/counter";
import { decrement, increment } from "../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="increment-btn" onClick={onIncrement}>
        increment
      </button>
      <button data-testid="decrement-btn" onClick={onDecrement}>
        decrement
      </button>
    </div>
  );
};

export default Counter;
