import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
const App = () => {
const weatherForecasts = [
  {
    day: 'Mon',
    img: './public/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: './public/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: './public/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: './public/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: './public/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];
  return (
      <>
    <h1>Local Weather</h1>
    <section>
      {weatherForecasts.map((day)=>
      <WeatherForecast {...day}/>
      )}
    </section>
  </>
  );
}

export default App