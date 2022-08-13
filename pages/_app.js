import "./index.css"

import React from "react";
import NextApp from "next/app";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from 'react-redux'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { 
      pageProps, 
    };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(App)

//https://coolors.co/palette/ffd6ff-e7c6ff-c8b6ff-b8c0ff-bbd0ff