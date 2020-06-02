import React, { Component } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: "",
      country: undefined,
      city: undefined,
      temp: undefined,
      conditions: undefined,
      status: "",
      humidity: undefined,
      loading: false,
    };
  }

  getWeather = (city) => {
    this.setState({ loading: true });
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0886fb1ae4fe7864daeca433861cf67`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loading: false,
          weather: { data },
          country: data.sys.country,
          temp: (data.main.temp),
          status: data.cod,
          conditions: data.weather[0].main,
          desc: data.weather[0].description,
          city: data.name,
          humidity: data.main.humidity,
        });
      })
      .catch(() => {
        console.log("error");
        this.setState({ loading: false, status: 404 });
      });
  };

  render() {
    let text;
    if (this.state.loading === true) {
      text = <h1 style={{ textAlign: "Center" }}>Loading</h1>;
    } else {
      text = (
        <Weather
          data={this.state.weather}
          country={this.state.country}
          city={this.state.city}
          humidity={this.state.humidity}
          conditions={this.state.conditions}
          desc={this.state.desc}
          status={this.state.status}
          temp={this.state.temp}
        />
      );
    }
    return (
      <React.Fragment>
        <Header getWeather={this.getWeather} />
        {text}
      </React.Fragment>
    );
  }
}

export default App;
