// src/NavBar.jsx
import React from 'react';

/**
 * Reusable navigation bar used across dashboards.
 * Accepts an array of link objects: { to: string, label: string, icon?: Component }
 */
const NavBar = ({ links }) => {
  return (
    <nav className="nav">
      {links.map(link => (
        <a
          key={link.to}
          href={link.to}
        >
          {link.icon && <link.icon aria-hidden="true" />}
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
