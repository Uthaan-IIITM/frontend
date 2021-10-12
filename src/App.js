import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/_general/Navbar";
import HomePage from "./components/home/HomePage";
import EventPage from "./components/event/EventPage";
import ShowsPage from "./components/shows/ShowsPage";
import BridgingGapBetweenJuniorsAndSeniorsCopy from "./components/home/upper-section/illustration-components/BridgingGapBetweenJuniorsAndSeniors_copy";
import { useEffect } from "react/cjs/react.development";
import { useStateValue } from "./StateProvider";
import ScrollToTop from "./components/_general/ScrollToTop";
import ArticlesPage from "./components/articles/ArticlesPage";
import InterviewsPage from "./components/interviews/InterviewsPage";
import ArticlesAndInterviewsCard from "./components/_general/ArticlesAndInterviewsCard";
import ArticlesLowerSection from "./components/articles/lower_section/ArticlesLowerSection";
import TeamPage from './components/team/TeamPage';
import GalleryPage from './components/gallery/GalleryPage';
import ContactUsPage from './components/contact_us/ContactUsPage';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
