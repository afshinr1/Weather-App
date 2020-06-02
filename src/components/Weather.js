import React from "react";
import clear from "../clear.png";
import clouds from "../cloudy.png";
import rain from "../rain.png";
import WeatherData from './WeatherData'
export default function Weather(props) {
  let text;
  let image;
  const {conditions } = props;
  if (conditions === "Clear") {
    image = clear;
  } else if (conditions === "Clouds") {
    image = clouds;
  } else if (conditions === "Rain") {
    image = rain;
  }
  props.status === 404 ? (text = <h1 style={{textAlign:'center'}}>City not found, Please Try Again</h1>) : 
                            (text = <WeatherData data={props} image={image}/>);

if(props.city === undefined) return null;

  return (
      <div>
          {text}
      </div>
  );
}
