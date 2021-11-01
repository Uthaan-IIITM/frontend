import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./styles/App.css";

import { useStateValue } from "./StateProvider";

import Navbar from "./components/_general/Navbar";
import ScrollToTop from "./components/_general/ScrollToTop";

import PreloaderDisplay from "./components/_general/PreloaderDisplay";
const HomePage = lazy(() => import("./components/home/HomePage"));
const EventPage = lazy(() => import("./components/event/EventPage"));
const ShowsPage = lazy(() => import("./components/shows/ShowsPage"));
const ArticlesPage = lazy(() => import("./components/articles/ArticlesPage"));
const InterviewsPage = lazy(() =>
  import("./components/interviews/InterviewsPage")
);
const TeamPage = lazy(() => import("./components/team/TeamPage"));
const GalleryPage = lazy(() => import("./components/gallery/GalleryPage"));
const ContactUsPage = lazy(() =>
  import("./components/contact_us/ContactUsPage")
);
const ErrorPage = lazy(() => import("./components/error/ErrorPage"));
const AdminPage = lazy(() => import("./components/Admin/AdminPage"));

function App() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar slidingIndex={state.navbar_state} />
        <Switch>
          <Route exact path="/">
            <PreloaderDisplay Component={HomePage} />
          </Route>
          <Route exact path="/events">
            <PreloaderDisplay Component={EventPage} />
          </Route>
          <Route exact path="/shows">
            <PreloaderDisplay Component={ShowsPage} />
          </Route>
          <Route exact path="/articles">
            <PreloaderDisplay Component={ArticlesPage} />
          </Route>
          <Route exact path="/interviews">
            <PreloaderDisplay Component={InterviewsPage} />
          </Route>
          <Route exact path="/team">
            <PreloaderDisplay Component={TeamPage} />
          </Route>
          <Route exact path="/gallery">
            <PreloaderDisplay Component={GalleryPage} />
          </Route>
          <Route exact path="/contactus">
            <PreloaderDisplay Component={ContactUsPage} />
          </Route>

          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
