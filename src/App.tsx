import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import UserList from "./components/UserList/UserList";

function reducer() {
    return {
        clients : [
            { id: 12412412, mail: 'leffler.karelle@marcellus.net', name: 'Lewis', secondName: 'Taylor', type: 'Business', company: 'green', country: 'Korea', subscription: '11/02/2016' },
            { id: 2352212, mail: 'karolann_walker@yahoo.com', name: 'Katherine', secondName: 'Rogers', type: 'Business', company: 'olive', country: 'Rwanda', subscription: '11/02/2016' },
            { id: 434634123, mail: 'lucile.mcdermott@yahoo.com', name: 'Francisco', secondName: 'Webster',  type: 'Private', company: 'aqua', country: 'Guam', subscription: '11/02/2016' },
            { id: 2342653, mail: 'elfrieda_sanford@hagenes.co.uk', name: 'Louisa', secondName: 'Griffith',  type: 'Business', company: 'olive', country: 'Uruguay', subscription: '11/02/2016' },
            { id: 235234, mail: 'daphney.okuneva@gmail.com', name: 'Alan', secondName: 'Ellis',  type: 'Private', company: 'green', country: 'Djibouti', subscription: '11/02/2016' },
            { id: 23423654, mail: 'ezequiel_rutherford@yahoo.com', name: 'Edward', secondName: 'Jacobs',  type: 'Business', company: 'black', country: 'Jersey', subscription: '11/02/2016' },
            { id: 536231, mail: 'leffler.karelle@marcellus.net', name: 'Lewis', secondName: 'Taylor',  type: 'Business', company: 'green', country: 'Korea', subscription: '11/02/2016' },
            { id: 7423423, mail: 'karolann_walker@yahoo.com', name: 'Katherine', secondName: 'Rogers',  type: 'Business', company: 'olive', country: 'Rwanda', subscription: '11/02/2016' },
            { id: 8234124, mail: 'lucile.mcdermott@yahoo.com', name: 'Francisco', secondName: 'Webster',  type: 'Private', company: 'aqua', country: 'Guam', subscription: '11/02/2016' },
        ]
    };
}

const store = createStore(reducer);

function App() {
  return (
      <div className="wrapper">
          <header>
              <Navigation/>
          </header>
          <div className="content">
              <SideBar/>
              <Provider store={store}>
                  <UserList/>
              </Provider>
          </div>
      </div>
  );
}

export default App;
