import React from "react";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import NewspaperDetailPage from "./pages/NewspaperDetailPage";

const App = () => {
  return (
    <div>
      <Switch>
        {/* Dynaqmic route */}
        {/* <Route
          path="/newspaper-detail-page/"
          // Var fylls prop?
          render={props => {
            return (
              <Layout>
                <NewspaperDetailPage {...props} />
              </Layout>
            );
          }}
        ></Route> */}

        <Route path="/">
          <Layout>
            <HomePage />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
