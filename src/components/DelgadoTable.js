import React from "react";

var DataTable = require("react-data-components").DataTable;

const mockData = () => {
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
  for (var i = 0; i < 20; i++) {
    data.push({
      id: i,
      name: names[~~(Math.random() * names.length)],
      city: cities[~~(Math.random() * cities.length)],
      address: addresses[~~(Math.random() * addresses.length)]
    });
  }

  // console.log(data);
  return data;
};

const mockData02 = () => {
  return [
    {
      id: 1,
      name: "Mario",
      city: "Rome",
      address: "Via dei tigli"
    },
    {
      id: 2,
      name: "Antonio",
      city: "Milan",
      address: "Via dei Passeri"
    }
  ];
};

const retrieveData = async () => {
  try {
    const response = await fetch("http://ai.storebook.io:9901/delgado/get");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const DelgadoTable = () => {
  var columns = [
    { title: "Name", prop: "name" },
    { title: "City", prop: "city" },
    { title: "Address", prop: "address" }
  ];

  return (
    <div>
      <DataTable
        className="panel-body"
        keys="id"
        columns={columns}
        initialData={mockData()}
        // initialPageLength={5}
        initialSortBy={{ prop: "city", order: "descending" }}
        // scrollY={200}
        // pageLengthOptions={[5, 20, 50]}
      />
    </div>
  );
};
