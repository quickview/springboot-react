import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopMenuComponent from './menu/TopMenuComponent';

function App() {
  return (
      <div className="App">
        <div>
          <TopMenuComponent>
          </TopMenuComponent>
        </div>
      </div>    
  );
}

export default App;
