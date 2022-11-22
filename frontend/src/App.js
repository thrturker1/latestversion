import React, {useState, useEffect} from 'react';
import AlergenSelect from './pages/AlergenSelect';
import './App.css';
import MainPage from './pages/MainPage';

function App () {

  const [alergens, setAlergens] = useState([]);
  const [admins, setAdmins] = useState([]);

  return (
    <div>
      <AlergenSelect/>
    </div>
  );
};

export default App;
