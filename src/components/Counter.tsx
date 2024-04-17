import { useEffect, useRef } from "react";
import useCounter from "../hooks/useCounter";
import "../sass/components/counter.scss";

type Props = {
  initialValue: number;
  minValue: number;
  maxValue: number;
  currentIncrementStep: number;
  currentDecrementStep: number;
};

const Counter: React.FC<Props> = ({ initialValue, minValue, maxValue, currentIncrementStep, currentDecrementStep }) => {
  const {
    num,
    increment,
    decrement,
    reset,
    setMax,
    setMin,
    isEven,
    incrementStep,
    decrementStep,
    setInitialValue,
    setUserDecStep,
    setUserIncStep,
  } = useCounter(initialValue);

  useEffect(() => {
    setInitialValue(initialValue);
    setMin(minValue);
    setMax(maxValue);
    setUserIncStep(currentIncrementStep);
    setUserDecStep(currentDecrementStep);
  }, []);

  const maxRef = useRef<HTMLInputElement>(null);
  const minRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="main">
        <p>Number is: {isEven ? "even" : "odd"}</p>
        <div className="buttons">
          <div className="change-count-button">
            <button onClick={decrement}>-</button>
            <button onClick={decrementStep}>- {currentDecrementStep}</button>
            <input type="number" name="max-num" id="" ref={minRef} />

            <button className="limit-button" onClick={() => setMin(parseInt(minRef.current!.value))}>
              set min
            </button>
          </div>

          <button onClick={reset}>Reset</button>

          <div className="change-count-button">
            <button onClick={increment}>+</button>
            <button onClick={incrementStep}>+ {currentIncrementStep}</button>

            <input type="number" name="max-num" id="" ref={maxRef} />

            <button className="limit-button" onClick={() => setMax(parseInt(maxRef.current!.value))}>
              set max
            </button>
          </div>
        </div>
        <p>{num}</p>
      </div>
    </>
  );
};

export default Counter;
