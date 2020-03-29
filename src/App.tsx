import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.svg';
import './App.scss';
import modules from './modules';

library.add(fas);

const App = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  console.log(modules);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-nav">
            {modules.map((
              module, // with a name, and routes
            ) => (
              <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>
                  {module.name}
                </Link>
              </li>
            ))}
          </ul>
        </header>
        <div className="App-content">
          {modules.map(module => (
            <Route {...module.routeProps} key={module.name} />
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
