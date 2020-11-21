import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Body from './Components/Body/Body';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavMenu from './Components/NavMenu/NavMenu';


function App() {

  console.log("%cMade with 💚 by HRT", "color:#ff66a3; font-size:30px");
  console.log = console.warn = console.error = () => {};
  console.error('Something bad happened.');

  return (
    <>
    <Router>
    <div className="nav">
      <NavMenu />
    </div>
    
    <div className="App">
        <Route path="/">
          <div className="app_sidebar">
            <Sidebar />
          </div>
          <div className="app_body">
            <Body />
          </div>
        </Route>
        
    </div>
    </Router>
    </>
  );
}

export default App;
