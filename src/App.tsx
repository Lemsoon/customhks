import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import "./sass/App.scss";

function App() {
  return (
    <main>
      <div className="use-counter">
        <Counter initialValue={7} minValue={-13} maxValue={13} currentIncrementStep={3} currentDecrementStep={3} />
        <Counter initialValue={3} minValue={-50} maxValue={23} currentIncrementStep={7} currentDecrementStep={1} />
        <Counter initialValue={0} minValue={-50} maxValue={5} currentIncrementStep={2} currentDecrementStep={2} />
      </div>
      <div className="use-toggle">
        <Toggle />
      </div>
    </main>
  );
}

export default App;
