import React from 'react';
import { Link, Route } from 'react-router-dom';

const CustomLink = ({ label, to, activeOnlyWhenExact, children: text }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link to={to}>{text || label}</Link>
        </div>
      )}
    />
  );
};

export default CustomLink;
