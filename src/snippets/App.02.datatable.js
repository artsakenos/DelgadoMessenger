import "./styles.css";
import React from "react";
import { MyTable } from "./MyTable";

var DataTable = require("react-data-components").DataTable;

export default function App() {
  var names = ["Carlos", "Juan", "Jesus", "Alberto", "John"];
  var cities = [
    "Chicago",
    "Tampico",
    "San Francisco",
    "Mexico City",
    "Boston",
    "New York"
  ];

  const mybutton = () => {
    return <button className="btn btn-info btn-default">Click here</button>;
  };

  var addresses = [
    mybutton(),
    "1931 Insurgentes Sur",
    "1 Lombard Street",
    "55 Av Hidalgo"
  ];

  var data = [];
  for (var i = 0; i < 1000; i++) {
    data.push({
      id: i,
      name: names[~~(Math.random() * names.length)],
      city: cities[~~(Math.random() * cities.length)],
      address: addresses[~~(Math.random() * addresses.length)]
    });
  }

  var columns = [
    { title: "Name", prop: "name" },
    { title: "City", prop: "city" },
    { title: "Address", prop: "address" }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <MyTable /> */}
      <DataTable
        className="panel-body"
        keys="id"
        columns={columns}
        initialData={data}
        // initialPageLength={5}
        initialSortBy={{ prop: "city", order: "descending" }}
        scrollY={200}
        // pageLengthOptions={[5, 20, 50]}
      />
    </div>
  );
}
