import './App.css';
import React from 'react';
import AlergenSelect from './pages/AlergenSelect';
import { Appbar } from '@react-native-material/core';
import { Button } from "@react-native-material/core";

function App() {
  return (
    <div className="App">
     <AlergenSelect/>
     <Appbar title = "Title"/>
    </div>
  );
}

export default App;
