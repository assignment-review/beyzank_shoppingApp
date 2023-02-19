/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import AuthProvider from "./src/router/AuthProvider";
import {store} from "./src/store/index";
import { Provider } from 'react-redux'

const App = () => {

  return (
    <Provider store={store}>
      <AuthProvider/>
    </Provider>
  );
}


export default App;
