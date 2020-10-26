import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'
import { theme } from './Theme.styles';
import { ThemeProvider } from '@material-ui/core';
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { InMemoryCache } from '@apollo/client';
// import ApolloClient from 'apollo-boost'
const {ApolloClient} = require('apollo-boost')

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql'
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloHooksProvider>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register()
