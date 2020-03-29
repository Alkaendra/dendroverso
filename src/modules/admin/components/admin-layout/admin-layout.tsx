import React, { useState } from 'react';
import './admin-layout.scss';
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';

import { adminMainTabs } from '../../admin';

const AdminLayout: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  let match = useRouteMatch();
  return (
    <Router>
      <div className="admin-layout">
        <div className="admin-side-nav">
          {adminMainTabs &&
            adminMainTabs.map(tab => (
              <div className={currentTab === tab.name ? 'active' : ''} key={tab.name}>
                <Link
                  className="admin-side-nav__tab"
                  onClick={() => setCurrentTab(tab.name)}
                  to={`${match.url}${tab.routeProps.path}`}
                >
                  {tab.name}
                </Link>
              </div>
            ))}
        </div>
        <div className="admin-content">
          {adminMainTabs.map(tab => (
            <Route
              exact
              path={`${match.path}${tab.routeProps.path}`}
              component={tab.routeProps.component}
              key={tab.name}
            />
          ))}
        </div>
      </div>
    </Router>
  );
};

export default AdminLayout;
