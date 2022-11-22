import { React } from 'react';
import Header from './Header';
import SlidePics from './SlidePics';
import { Typography } from '@mui/material'
import AlergenSelect from './pages/AlergenSelect';
import './App.css';
import ImageSlider from "./ImageSlider";

const App = () => {

  return (
    <div>
      <AlergenSelect/>
    </div>
  );
};

export default App;
