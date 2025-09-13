import React from 'react';
import './WheaterResult.css';
import {
  CloudSun,
  CloudRainWind,
  Sun,
  Cloud,
  Snowflake,
  CloudDrizzle,
  Zap,
} from 'lucide-react';

const getWeatherIcon = (main) => {
  switch (main) {
    case 'Rain':
      return <CloudRainWind />;
    case 'Clouds':
      return <Cloud />;
    case 'Clear':
      return <Sun />;
    case 'Snow':
      return <Snowflake />;
    case 'Drizzle':
      return <CloudDrizzle />;
    case 'Thunderstorm':
      return <Zap />;
    default:
      return <CloudSun />; // fallback icon
  }
};

function WheaterResult({wheaterData}) {
  console.log(wheaterData)
  return <div className='container'>

      <p>The. WheaterResult</p>
       {wheaterData && wheaterData.wind && wheaterData.weather && (
  <div className='Details'>
    <div className='celcious'>
      <h1>{wheaterData.wind.deg}<span>&#8451;</span></h1>
    </div>
    <div className='city'>
      <h2>{wheaterData.name}</h2>
      <p><span>06:09-sunday</span><span>6 oct `19</span></p>
    </div>
    <div className='sympol'>
      <span>{getWeatherIcon(wheaterData.weather[0].description)}</span>
      <span>{wheaterData.weather[0].description}</span>
    </div>
  </div>
)}
  </div>;
}

export default WheaterResult;
