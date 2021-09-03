<<<<<<< HEAD
import HomePage from "./pages/home/home";
import QuestionsPage from "./pages/questions/questions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFoundPage from "./pages/notFound/notFound";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/questions">
            <QuestionsPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
=======
import HomePage from "./pages/home/home";
import QuestionsPage from "./pages/questions/questions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from "./pages/notFound/notFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/questions">
          <QuestionsPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
>>>>>>> 6d17bc8d6f3b0e48456fc7d04ad2787d9295265b
