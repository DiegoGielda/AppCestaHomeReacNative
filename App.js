import React from "react";

import { Text, SafeAreaView, StatusBar } from 'react-native';
import Home from './src/telas/Home';

function App() {
  return <>
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  </>

}

export default App;