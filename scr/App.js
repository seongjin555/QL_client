import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
              <Route exact={true} path={"/"} component={Home} />
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
