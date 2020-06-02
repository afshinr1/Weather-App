import React from 'react'


export default function WeatherData(props) {

    console.log('jaja', props.data);
    const { temp, city, country, humidity, desc } = props.data;
    let image =props.image;
   
    return (
     
    <div className="container">
    <img src={image} alt=""/>
    <div className="info">
      <div className="location">
        <h2>{city}</h2>
        <h3>{country}</h3>
      </div>
      <div className="data">
        <h2>{desc}</h2>
        <h2>Temperature: {temp} </h2>
      </div>
    </div>
    <h4>Pressure : {humidity}</h4>
  </div>
    )
}
