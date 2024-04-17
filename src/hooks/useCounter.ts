import { useEffect, useState } from "react";

const useCounter = (init: number) => {
  const [maxNum, setMaxNum] = useState<number>(1);
  const [minNum, setMinNum] = useState<number>(1);
  const [isEven, setIsEven] = useState<boolean>(true);
  const [initialValue, setInitialValue] = useState<number>(init);
  const [num, setNum] = useState<number>(initialValue);
  const [userDecStep, setUserDecStep] = useState<number>(1);
  const [userIncStep, setUserIncStep] = useState<number>(1);

  useEffect(() => {
    if (num % 2 == 0) setIsEven(true);
    else setIsEven(false);
  }, [num]);

  useEffect(() => {
    reset;
  }, [initialValue]);

  const increment = () => {
    if (num != maxNum) setNum(num + 1);
  };

  const decrement = () => {
    if (num != minNum) setNum(num - 1);
  };

  const reset = () => setNum(initialValue);

  const setMax = (maxRef: number) => {
    setMaxNum(maxRef);
  };
  const setMin = (maxRef: number) => {
    setMinNum(maxRef);
  };

  const incrementStep = () => {
    if (num + userIncStep <= maxNum) {
      setNum(num + userIncStep);
    }
  };
  const decrementStep = () => {
    if (num - userDecStep >= minNum) {
      setNum(num - userDecStep);
    }
  };

  return {
    num,
    isEven,
    increment,
    decrement,
    reset,
    setMax,
    setMin,
    incrementStep,
    decrementStep,
    setInitialValue,
    setUserDecStep,
    setUserIncStep,
  };
};

export default useCounter;
