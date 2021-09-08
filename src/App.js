import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/_general/Navbar";
import HomePage from "./components/home/HomePage";
import EventPage from "./components/event/EventPage";
import ShowsPage from "./components/shows/ShowsPage";
import BridgingGapBetweenJuniorsAndSeniorsCopy from "./components/home/upper-section/illustration-components/BridgingGapBetweenJuniorsAndSeniors_copy";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar slidingIndex={0} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/events"
            component={() => {
              return <EventPage />;
            }}
          />
          <Route exact path="/shows" component={ShowsPage} />
          <Route
            exact
            path="/123"
            component={BridgingGapBetweenJuniorsAndSeniorsCopy}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
