import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h2>Welcome To Homepage!</h2>
      <ul className="flex">
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="people">People</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
