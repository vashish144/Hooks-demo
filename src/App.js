import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/UseStateComponent/increment/Counter";
import HookCounter from "./components/UseStateComponent/increment/HookCounter";
import HookMultipuleCount from "./components/UseStateComponent/increment/HookMultipuleCount";
import HookCounterWithObject from "./components/UseStateComponent/increment/HookCounterWithObject";
import HookCounterWithArray from "./components/UseStateComponent/increment/HookCounterWithArray";
import ClassComponentUseEffect from "./components/UseEffectComponent/ClassComponentUseEffect";
import CounterUsingUseEffect from "./components/UseEffectComponent/CounterUsingUseEffect";
import MouseCodinateClass from "./components/MouseRendring/MouseCodinateClass";
import MouseRendringHook from "./components/MouseRendring/MouseRendringHook";
import MouseContainer from "./components/MouseRendring/MouseContainer";
import AutomaticCounter from "./components/AutoUpdateCounter/AutomaticCounter";
import AutomaticCounterHook from "./components/AutoUpdateCounter/AutomaticCounterHook";
import DataFetchingHook from "./components/DataFetching/DataFetchingHook";
import AppComponent from "./components/useContextComponent/AppComponent";
import UseReducerHomeComponent from "./components/UseReducerHook/UseReducerHomeComponent";
import ParentComponent from "./components/UseCallbackHook/ParentComponent";
import UseMemoParentComponent from "./components/UseMemoHook/UseMemoParentComponent";
import OtherTutorialConsume from "./components/OtherTutorial/OtherTutorialConsume";

function App() {
  return (
    <div className="App">
      <OtherTutorialConsume/>
      {/* <UseMemoParentComponent/> */}
      {/* <ParentComponent/> */}
      {/* <UseReducerHomeComponent/> */}
      {/* <AppComponent /> */}
      {/* <DataFetchingHook /> */}
      {/* <AutomaticCounterHook />
      <AutomaticCounter /> */}
      {/* <MouseContainer /> */}
      {/* <MouseRendringHook/> */}
      {/* <MouseCodinateClass /> */}
      {/* <CounterUsingUseEffect /> */}
      {/* <ClassComponentUseEffect /> */}
      {/* <HookCounterWithArray /> */}
      {/* <HookCounterWithObject /> */}
      {/* <HookMultipuleCount /> */}
      {/* <HookCounter /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
