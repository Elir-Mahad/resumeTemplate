import { Component } from "react";
import "./App.css";
import Resume from "./components/Resume/Resume";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Resume />
      </div>
    );
  }
}
export default App;
