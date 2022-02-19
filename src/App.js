import { Component } from "react";
import "./App.css";
import ExportPdfComponent from "./components/ExportPdfComponent";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <ExportPdfComponent />
      </div>
    );
  }
}
export default App;
