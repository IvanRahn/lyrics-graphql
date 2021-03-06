import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import {ApolloProvider} from "react-apollo";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import App from "./components/App"
import SongList from "./components/SongList"
import SongCreate from './components/SongCreate';
const Root = () => {
const client = new ApolloClient({})
  return (
  <ApolloProvider client={client}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={SongList}/>
    </Route>
    <Route path="/song/new" component={SongCreate}/>
    </Router>
  </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
