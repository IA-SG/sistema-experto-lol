import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./pages/home/home";
import LoadingComponent from "./components/loading";
const QuestionsPage = lazy(() => import("./pages/questions/questions"));
const NotFoundPage = lazy(() => import("./pages/notFound/notFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
