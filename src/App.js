import './App.css';
import WheaterResult from './WheaterResult';
import SearchDetails from './SearchDetails';
import { useEffect, useState } from 'react';
import rainy from './rainy.jpg';
import sunny from './sunny.jpg';
import cloudy from './cloudy.jpg';
import snow from './snow.jpg';

function App() {
  const [dataLists, setDataLists] = useState('London'); // ✅ Default city
  const [wheaterData, setWheaterData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (dataLists) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${dataLists}&appid=906623508683ca79c46fec2b05eb6e67&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === '404') {
            setError(`City "${dataLists}" not found`);
            setWheaterData(null);
          } else {
            setWheaterData(data);
            setError('');
          }
        })
        .catch(() => {
          setError('Unable to fetch weather data');
        });
    }
  }, [dataLists]);

  let backgroundImage = sunny;
  if (wheaterData?.weather?.[0]?.main) {
    const condition = wheaterData.weather[0].main;
    if (condition === 'Rain') backgroundImage = rainy;
    else if (condition === 'Clouds') backgroundImage = cloudy;
    else if (condition === 'Snow') backgroundImage = snow;
    else if (condition === 'Clear') backgroundImage = sunny;
  }

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="App" style={divStyle}>
      {error && <p className="errormsg">{error}</p>}
      <div className="overlay">
        <WheaterResult wheaterData={wheaterData} />
        <SearchDetails
          setDataLists={setDataLists}
          dataLists={dataLists}
          wheaterData={wheaterData}
        />
      </div>
    </div>
  );
}

export default App;
