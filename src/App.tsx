import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="wrapper">
      <header>
        <Navigation/>
      </header>
      <div className="content">
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
