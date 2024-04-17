import { useState } from "react";

const useToggle = () => {
  const [trueFalse, setTrueFalse] = useState<boolean>(false);

  const toggle = () => {
    setTrueFalse(!trueFalse);
  };

  return { toggle, trueFalse };
};

export default useToggle;
