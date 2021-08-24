import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/_general/Navbar";

function App() {
  // This code is Just for Testing purposes
  // Actual code will contain routes and stufff...

  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
