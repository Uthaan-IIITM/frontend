import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import PrimaryFooter from "./components/_general/footer/PrimaryFooter";
import HomeUpperSection from "./components/home/upper-section/HomeUpperSection";

function App() {
  // This code is Just for Testing purposes
  // Actual code will contain routes and stufff...

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PrimaryFooter} />
        </Switch>
      </Router>
      {/* <PrimaryFooter /> */}

      {/* <HomeUpperSection/> */}
    </div>
  );
}

export default App;
