import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const { toggle, trueFalse } = useToggle();

  return (
    <>
      <p className="bool-display">{trueFalse ? "True" : "False"}</p>
      <button className="toggle-btn" onClick={toggle}>
        toggle
      </button>
    </>
  );
};

export default Toggle;
