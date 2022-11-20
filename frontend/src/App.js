import { React } from 'react';
import Header from './Header';
import SlidePics from './SlidePics';
import { Typography } from '@mui/material'

function App() {
  return (
    <div>
      <Typography>
        <Header/>
        <SlidePics/>
      </Typography>

      
    </div>
  );
}

export default App;
