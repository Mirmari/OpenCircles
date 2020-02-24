import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="wrapper">
      <header>
        <Navigation/>
      </header>
      <div className="content">
        <SideBar/>
        <UserList/>
      </div>
    </div>
  );
}

export default App;
