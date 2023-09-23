import React from "react";
import DataTable from "react-data-components";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const MyTestComponent = () => {
  var columns = [
    { title: "Name", prop: "name" },
    { title: "City", prop: "city" },
    { title: "Address", prop: "address" }
  ];

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

  return (
    <div>
      <h3> Ciao da un TestComponent </h3>
    </div>
  );
};
