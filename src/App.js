import "./App.css";
import CakeComponent from "./components/CakeComponent";
import IceCreamComponent from "./components/IceCreamComponent";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <CakeComponent />
      <IceCreamComponent />
      <User/>
    </div>
  );
}

export default App;
