import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import { useStateValue } from "./StateProvider";

import Navbar from "./components/_general/Navbar";
import ScrollToTop from "./components/_general/ScrollToTop";

import HomePage from "./components/home/HomePage";
import EventPage from "./components/event/EventPage";
import ShowsPage from "./components/shows/ShowsPage";
import ArticlesPage from "./components/articles/ArticlesPage";
import InterviewsPage from "./components/interviews/InterviewsPage";
import TeamPage from "./components/team/TeamPage";
import GalleryPage from "./components/gallery/GalleryPage";
import ContactUsPage from "./components/contact_us/ContactUsPage";
import ErrorPage from "./components/error/ErrorPage";

function App() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar slidingIndex={state.navbar_state} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/events" component={EventPage} />
          <Route exact path="/shows" component={ShowsPage} />
          <Route exact path="/articles" component={ArticlesPage} />
          <Route exact path="/interviews" component={InterviewsPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/contactus" component={ContactUsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
