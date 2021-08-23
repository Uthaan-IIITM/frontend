import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import PrimaryFooter from "./components/_general/footer/PrimaryFooter";
import HomeUpperSection from "./components/home/upper-section/HomeUpperSection";
import BridgingGapBetweenJuniorsAndSeniorsCopy from "./components/home/upper-section/illustration-components/BridgingGapBetweenJuniorsAndSeniors_copy";
import PushingBoundariesOnOurIdeasAndOurCraftCopy from "./components/home/upper-section/illustration-components/PushingBoundariesOnOurIdeasAndOurCraft_copy";
import CreateConnectAndTrancendCopy from "./components/home/upper-section/illustration-components/CreateConnectAndTrancend_copy";

function App() {
  // This code is Just for Testing purposes
  // Actual code will contain routes and stufff...

  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/" component={PrimaryFooter} />
        </Switch>
      </Router> */}
      {/* <PrimaryFooter /> */}
      {/* <HomeUpperSection /> */}
      {/* <BridgingGapBetweenJuniorsAndSeniorsCopy containerWidth="75vw" /> */}
      <CreateConnectAndTrancendCopy containerWidth="60vw" />
    </div>
  );
}

export default App;
