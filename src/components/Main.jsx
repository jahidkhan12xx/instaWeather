"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const API_KEY = "a2bcb840bcce80ca6d35cbfd02978914";

  const [text, setText] = useState("dhaka");
  const [weather, setWeather] = useState();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    text ? text : "dhaka"
  }&appid=${API_KEY}`;

  function fahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      setWeather(res.data);
    });
  }, []);

  const fetchWeather = (e) => {
    axios.get(url).then((res) => {
      setWeather(res.data);
    });
  };

  return (
    <div>
      <div className=" flex justify-center items-center">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Enter City
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h2 className=" my-2 text-lg font-bold">City Name :</h2>
            <input
              onChange={(e) => setText(e.target.value)}
              className=" w-full input input-bordered input-primary  max-w-xs"
              type="text"
            />
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}

                <button onClick={fetchWeather} className="btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <div className=" my-9 w-full h-full  flex justify-center items-center">
        {weather && (
          <div
            className=" font-semibold
         text-2xl text-white bg-red-700 shadow-2xl w-[40vw] px-3 py-2 rounded-xl h-[40vh]"
          >
            <h2 className=" my-4 mx-8 text-center">City : {weather?.name}</h2>
            <h2 className=" my-4 mx-8 text-center">
              Tempreture : {(weather?.main.temp - 273.15).toFixed(0)}{" "}
              <sup>0</sup>
            </h2>
            <h2 className=" my-4 mx-8 text-center">
              Feel Like : {(weather?.main.feels_like - 273.15).toFixed(0)}{" "}
              <sup>0</sup>
            </h2>
            <h2 className=" my-4 mx-8 text-center">
              Min-Temp : {(weather?.main.temp_min - 273.15).toFixed(0)}{" "}
              <sup>0</sup>
            </h2>
            <h2 className=" my-4 mx-8 text-center">
              Max-Temp : {(weather?.main.temp_max - 273.15).toFixed(0)}{" "}
              <sup>0</sup>
            </h2>
            <h2 className=" my-4 mx-8 text-center">
              Humidity : {weather?.main.humidity}
            </h2>
            <h2 className=" my-4 mx-8 text-center">
              Pressure : {weather?.main.pressure}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
