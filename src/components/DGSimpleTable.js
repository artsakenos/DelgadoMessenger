import React, { Component } from "react";

class DGSimpleTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [] // Store the fetched data here
    };
  }

  componentDidMount() {
    // Fetch data from the provided URL
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch("http://localhost:9901/delgado/get")
      .then((response) => response.json())
      //.then(console.log(data))
      .then((data) => {
        // console.log(data);
        this.setState({
          data: data //.map(opt => ({ label: opt.name, value: opt.id }))
        });
      })
      .catch((err) => {
        console.log("some error", err.message);
        this.setState({ error: err });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Simple Test Table</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sender</th>
              <th>Title</th>
              <th>Body</th>
              <th>Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.sender}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>{item.date}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DGSimpleTable;
