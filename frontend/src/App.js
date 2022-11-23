import React, {useState, useEffect} from 'react';
import AlergenSelect from './pages/AlergenSelect';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FoodPage from './pages/FoodPage';

function App () {

  const [alergens, setAlergens] = useState([]);
  const [admins, setAdmins] = useState([]);

  return (
    <div>
      <Routes>
      <Route path = "/" element = {<AlergenSelect/>}>
      </Route>
      <Route path = "/mainpage" element = {<MainPage/>}>
      </Route>
      <Route path = "/foodpage/:id" element = {<FoodPage/>}>
      </Route>
      </Routes>
      
      
    </div>
  );
};

export default App;
