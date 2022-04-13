import React from "react";
import { Link } from "react-router-dom";

function Article(props) {
  return (
    <>
      <Link to="/articles">Go back to articles</Link>
      <h3>The slug is {props.match.params.slug}</h3>
    </>
  );
}

export default Article;
