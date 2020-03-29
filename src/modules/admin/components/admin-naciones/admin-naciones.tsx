import React from 'react';
import { useRouteMatch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { adminNationUrls, adminNacionesActions } from '../../admin';
import './admin-naciones.scss';

const AdminNaciones: React.FC = () => {
  let match = useRouteMatch();
  return (
    <Router>
      <div className="admin-layout">
        <section className="admin-naciones-nav">
          {adminNacionesActions &&
            adminNacionesActions.map(action => (
              <div className="admin-naciones-nav__card" title={action.name} key={action.name}>
                <Link to={`${match.path}${action.url}`}>{action.name}</Link>
              </div>
            ))}
        </section>
        <div className="admin-content">
          {adminNationUrls.map(tab => (
            <Route path={`${match.path}${tab.routeProps.path}`} component={tab.routeProps.component} key={tab.name} />
          ))}
        </div>
      </div>
    </Router>
  );
};

export default AdminNaciones;
