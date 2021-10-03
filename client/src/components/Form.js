import React from "react";
import axios from "axios";

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }


  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    const input = document.getElementsByName("inputValue")[0].value;
    e.preventDefault();
    const appendInput = "http://localhost:5000/api/whois/" + input;
    const getForm = document.getElementById("inputForm");
    getForm.action = appendInput;
    const stateOfInputValue = this.state.inputValue;
    axios
      .get(`http://localhost:5000/api/whois/${encodeURIComponent(`${stateOfInputValue}`)}`)
      .then((resp) => {
          console.log(stateOfInputValue);
        console.log(resp.data);
      });
  };

  render() {
    return (
      <>
        <form>
          <input
            id="inputForm"
            name="inputValue"
            placeholder="Domain or IP Address"
            value={this.state.inputValue}
            onChange={(e) => this.change(e)}
          />
          <br />
          <button className="submitBtn" onClick={(e) => this.onSubmit(e)}>
            Submit
          </button>
        </form>
        <br />
        {this.state.data.map((data) => (
          <p>
            {data.k} {data.v}
          </p>
        ))}
      </>
    );
  }
}
