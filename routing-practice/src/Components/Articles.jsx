import articles from "../Data/articles.json";
import React from "react";
import { Link } from "react-router-dom";

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  render() {
    let filteredSearch = articles.filter((article) =>
      article.title.toLowerCase().includes(this.state.search)
    );
    return (
      <>
        <input
          type="text"
          name="text"
          placeholder="Search.."
          value={this.state.search}
          onChange={({ target }) => this.setState({ search: target.value })}
        />
        <ul className="flex articles">
          {filteredSearch.map((faq) => (
            <li>
              <Link to={"/articles/" + faq.slug}>
                <h3>{faq.title}</h3>
              </Link>
              <span>{faq.author}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Articles;
