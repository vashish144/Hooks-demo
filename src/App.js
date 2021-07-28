import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/increment/Counter";
import HookCounter from "./components/increment/HookCounter";
import HookMultipuleCount from "./components/increment/HookMultipuleCount";
import HookCounterWithObject from "./components/increment/HookCounterWithObject";

function App() {
  return (
    <div className="App">
      <HookCounterWithObject />
      {/* <HookMultipuleCount /> */}
      {/* <HookCounter /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
