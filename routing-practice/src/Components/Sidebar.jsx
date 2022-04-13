import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex-25 sidebar flex">
      <NavLink exact to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/articles">
        <span>Articles</span>
      </NavLink>
      <NavLink to="/people">
        <span>People</span>
      </NavLink>
      <NavLink to="/books">
        <span>Books</span>
      </NavLink>
      <NavLink to="/help">
        <span>Help and Support</span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
