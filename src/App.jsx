// import React, { useState } from "react";
// import { TiWeatherDownpour } from "react-icons/ti";
// import { TiWeatherSunny } from "react-icons/ti";
// import { TiWeatherCloudy } from "react-icons/ti";
// import { TiWeatherWindy } from "react-icons/ti";
// function App() {
//   const [city, setCity] = useState("Nainital");
//   const [weather, setWeather] = useState("");
//   const handleCity = (e) => {
//     setCity(e.target.value);
//   };
//   const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//   const apiid = "1955903c43836b2320c5d93f361bde4f";

//   const handleSearch = async () => {
//     let response = await fetch(`${api}${city}&appid=${apiid}`);
//     const data = await response.json();
//     setWeather(data);
//     console.log(data);
//     setCity("");
//   };
//   return (
//     <div
//       className="flex justify-center items-center min-h-screen bg-no-repeat bg-cover"
//       style={{
//         backgroundImage:
//           "url('https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//       }}
//     >
//       <div
//         className=" h-[700px] w-[450px] rounded-3xl p-5 "
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//         }}
//       >
//         <h1 className="text-4xl font-bold  text-white text-center mb-5 mt-4">
//           Weather App
//         </h1>
//         <div className="flex justify-between">
//           <input
//             className="m-4 w-[90%] p-2 text-xl rounded-xl"
//             type="text"
//             placeholder="Enter location"
//             value={city}
//             onChange={handleCity}
//           />
//           <button
//             className="bg-blue-700 text-xl text-black m-4 p-1 rounded-2xl w-[25%]"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//         <div className="flex  text-8xl font-bold animate-bounce mt-5 justify-center space-x-10 text-yellow-600">
//           <TiWeatherDownpour />
//           <TiWeatherSunny />
//           <TiWeatherCloudy />
//           <TiWeatherWindy />
//         </div>
//         <div>
//           <h1 className="text-center text-4xl font-extrabold text-white mt-5 animate-bounce">
//             {weather.name} {weather.message}
//           </h1>
//           <h1 className="text-center text-5xl  font-extrabold text-white mt-3">
//             {weather?.main?.temp}°C
//           </h1>
//         </div>
//         <div className="grid grid-cols-2 mt-10 ml-8 text-xl pl-12 gap-5 text-white">
//           <h1>
//             Wind Speed <br />
//             {weather?.wind?.speed}km/h
//           </h1>
//           <h1>
//             Sea Level <br />
//             {weather?.main?.sea_level}hpa
//           </h1>
//           <h1>
//             Ground Level
//             <br /> {weather?.main?.grnd_level}hpa
//           </h1>
//           <h1>
//             Humidity <br />
//             {weather?.main?.humidity}%
//           </h1>
//           <h1>
//             Pressure
//             <br /> {weather?.main?.pressure}hpa
//           </h1>
//           <h1>
//             Visibility
//             <br /> {weather?.visibility}km/h
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherWindy } from "react-icons/ti";

function App() {
  const [city, setCity] = useState("Nainital");
  const [weather, setWeather] = useState("");
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apiid = "1955903c43836b2320c5d93f361bde4f";

  const handleSearch = async () => {
    let response = await fetch(`${api}${city}&appid=${apiid}`);
    const data = await response.json();
    setWeather(data);
    console.log(data);
    setCity("");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-no-repeat bg-cover px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div
        className="h-[600px] sm:h-[700px] w-full sm:w-[400px] md:w-[450px] rounded-3xl p-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-5 mt-4">
          Weather App
        </h1>

        <div className="flex justify-between items-center">
          <input
            className="m-4 w-[75%] sm:w-[90%] p-2 text-lg sm:text-xl rounded-xl"
            type="text"
            placeholder="Enter location"
            value={city}
            onChange={handleCity}
          />
          <button
            className="bg-blue-700 text-lg sm:text-xl text-black m-4 p-1 rounded-2xl w-[20%] sm:w-[25%]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="flex text-6xl sm:text-8xl font-bold animate-bounce mt-5 justify-center space-x-6 sm:space-x-10 text-yellow-600">
          <TiWeatherDownpour />
          <TiWeatherSunny />
          <TiWeatherCloudy />
          <TiWeatherWindy />
        </div>

        <div>
          <h1 className="text-center text-2xl sm:text-4xl font-extrabold text-white mt-5 animate-bounce">
            {weather.name} {weather.message}
          </h1>
          <h1 className="text-center text-3xl sm:text-5xl font-extrabold text-white mt-3">
            {weather?.main?.temp}°C
          </h1>
        </div>

        <div className="grid grid-cols-2 mt-10 text-sm sm:text-xl gap-3 sm:gap-5 text-white">
          <h1>
            Wind Speed <br />
            {weather?.wind?.speed}km/h
          </h1>
          <h1>
            Sea Level <br />
            {weather?.main?.sea_level}hpa
          </h1>
          <h1>
            Ground Level
            <br /> {weather?.main?.grnd_level}hpa
          </h1>
          <h1>
            Humidity <br />
            {weather?.main?.humidity}%
          </h1>
          <h1>
            Pressure
            <br /> {weather?.main?.pressure}hpa
          </h1>
          <h1>
            Visibility
            <br /> {weather?.visibility}km/h
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
