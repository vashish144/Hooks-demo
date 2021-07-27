import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/increment/Counter";
import HookCounter from "./components/increment/HookCounter";

function App() {
  return (
    <div className="App">
      <HookCounter />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
