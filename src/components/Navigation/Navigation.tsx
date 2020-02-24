import React from "react";

import './Navigation.css';

const Navigation = () => {

    return (
      <div className="nav">
          <div className="nav__items">
              <div className="nav__group">
                  <div className="burger" />
                  <div className="users">
                      <div className="users__title">Users List</div>
                      <div className="users__subtitle">764 users</div>
                  </div>
              </div>
              <div className="nav__item">
                  <input className="input" type="text" placeholder="Search" />
              </div>
              <div className="nav__group">
                  <button className="button">
                      <span className="button__text">Table filter</span>
                  </button>
                  <div className="person">Current Person</div>
                  <div className="arrow" />
              </div>
          </div>
      </div>
    );
};

export default Navigation;