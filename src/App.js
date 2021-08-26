import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/_general/Navbar";
import HomePage from "./components/home/HomePage";
import BridgingGapBetweenJuniorsAndSeniorsCopy from './components/home/upper-section/illustration-components/BridgingGapBetweenJuniorsAndSeniors_copy';
import CreateConnectAndTrancendCopy from './components/home/upper-section/illustration-components/CreateConnectAndTrancend_copy';
import PushingBoundariesOnOurIdeasAndOurCraftCopy from './components/home/upper-section/illustration-components/PushingBoundariesOnOurIdeasAndOurCraft_copy';

function App() {
  // This code is Just for Testing purposes
  // Actual code will contain routes and stufff...

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/123" component={BridgingGapBetweenJuniorsAndSeniorsCopy} />
          <Route exact path="/234" component={CreateConnectAndTrancendCopy} />
          <Route exact path="/345" component={PushingBoundariesOnOurIdeasAndOurCraftCopy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
