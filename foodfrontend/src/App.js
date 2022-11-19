import './App.css';
import React from 'react';
import AlergenSelect from './pages/AlergenSelect';
import AdminPage from './pages/AdminPage';
import FoodsPage from './pages/FoodsPage';


function App() {
  return (
    <div className="App">
     <AlergenSelect/>
     <button>
      tikla
     </button>
     <AdminPage/>
     <button>
      tiklama
     </button>
     <FoodsPage/>
     <button>
      naber mudur
     </button>
    </div>
  );
}

export default App;
