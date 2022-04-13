import React from "react";
import got from "../Data/got.json";

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {
    let allPeople = got.reduce((acc, house) => {
      acc = acc.concat(house.people);
      return acc;
    }, []);
    let filteredPeople = [...allPeople].filter((p) =>
      p.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="people">
        <input
          type="text"
          name="text"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <h2>People of GOT</h2>
        <ul className="flex">
          {filteredPeople.map((p) => (
            <Person {...p} />
          ))}
        </ul>
      </div>
    );
  }
}

function Person(props) {
  return (
    <li key={props.name} className="card flex-25">
      <div className="card-heading">
        <img src={props.image} alt="got" />
        <h3>{props.name}</h3>
      </div>
    </li>
  );
}

export default People;
