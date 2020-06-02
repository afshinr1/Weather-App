import React, { Component } from "react";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState ({ [name]: value });
  };

   handleSubmit(event){
       event.preventDefault();
      this.props.getWeather(this.state.city);
  }

  render() {
    return (
      <div className="header">
        <header>Weather App</header>
        <form className='input-form' onSubmit={this.handleSubmit}>
          <input
          className = 'input'
            placeholder="Enter City"
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Header;
