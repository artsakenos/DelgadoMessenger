import React, { Component } from "react";
import { Container, Form, Row, Col, Button, Table } from "react-bootstrap";

export default class DGMain extends Component {
  constructor() {
    super();
    this.state = {
      data: [], // Store the fetched data here
      type: "MESSAGE",
      sender: "",
      receivers: ""
    };
  }

  componentDidMount() {
    const savedSender = localStorage.getItem("sender");
    const savedReceivers = localStorage.getItem("receivers");
    const savedType = localStorage.getItem("type");
    if (savedSender) {
      this.setState({ sender: savedSender });
    }
    if (savedReceivers) {
      this.setState({ receivers: savedReceivers });
    }
    if (savedType) {
      this.setState({ type: savedType });
    }

    this.updateData(); // Chiama subito allo start
    this.intervalId = setInterval(this.updateData, 15_000);
  }

  handleChangeType = (e) => {
    const typeValue = e.target.value;
    this.setState({ type: typeValue });
    localStorage.setItem("type", typeValue);
  };

  handleChangeSender = (e) => {
    const senderValue = e.target.value;
    this.setState({ sender: senderValue });
    localStorage.setItem("sender", senderValue);
  };

  handleChangeReceivers = (e) => {
    const receiversValue = e.target.value;
    this.setState({ receivers: receiversValue });
    localStorage.setItem("receivers", receiversValue);
  };

  handleChangeBody = (e) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const receiversArray = this.state.receivers
      .split(",")
      .map((receiver) => receiver.trim());

    // Create the payload for the POST request
    const payload = {
      sender: this.state.sender,
      title: this.state.title,
      body: this.state.body,
      type: this.state.type,
      receivers: receiversArray
    };

    // Make the POST request
    // fetch("http://ai.storebook.io:9901/delgado/save", {
    fetch("http://localhost:9901/delgado/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data as needed
        console.log("Response data:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

    this.setState({ body: "" });
  };

  updateData = () => {
    fetch("http://localhost:9901/delgado/last")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          data: data
        });
      })
      .catch((err) => {
        console.log("some error", err.message);
        this.setState({ error: err });
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Label column sm={3}>
                Sender
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Nickname"
                  value={this.state.sender} // Bind the value to the state
                  onChange={this.handleChangeSender} // Handle changes and update state
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label column sm={3}>
                Receivers
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="#italy, @buddy"
                  value={this.state.receivers}
                  onChange={this.handleChangeReceivers}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label column sm={3}>
                Message
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={this.state.body}
                  onChange={this.handleChangeBody}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label column sm={3}>
                Message Type
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  as="select"
                  value={this.state.type}
                  onChange={this.handleChangeType}
                >
                  <option value="">Select an option</option>
                  <option value="IMAGE">Image</option>
                  <option value="DOCUMENT">Document</option>
                  <option value="MESSAGE">Message</option>
                  <option value="PROFILE">Profile</option>
                  <option value="CONFIGURATION">Configuration</option>
                </Form.Control>
              </Col>
              <Col sm={{ span: 5, offset: 1 }}>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>

          <Table striped bordered hover>
            <thead>
              <tr>
                {/*<th>#</th>*/}
                <th>Date</th>
                <th>Sender</th>
                <th>Receivers</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => (
                <tr key={item.id}>
                  {/*<td>{item.id}</td>*/}
                  <td>{item.date.slice(0, 16).replace("T", " ")}</td>
                  <td>{item.sender}</td>
                  <td>{item.receivers.join(", ")}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
