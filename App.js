import React from 'react';
import type {Node} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StatusBar} from "react-native"

import MainNavigation from "./src/navigation/"



const App: () => Node = () => {

  return (
      <SafeAreaProvider>
        <StatusBar backgroundColor="#000" barStyle={'light-content'} />
      <MainNavigation/>
      </SafeAreaProvider>

  );
};



export default App;
