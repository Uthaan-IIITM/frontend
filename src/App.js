import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/_general/Navbar";
import HomePage from "./components/home/HomePage";
import EventPage from "./components/event/EventPage";
import ShowsPage from "./components/shows/ShowsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar slidingIndex={1} />
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
