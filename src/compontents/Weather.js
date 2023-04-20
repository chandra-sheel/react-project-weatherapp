import React from "react";

const Weather = (props) => {
  return (
    <div className="info">
      <div className="flex">
        {props.city && (
          <h4 className="city">
            <img
              className="loc"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiQ91IN-HVG2bGTLCWGATlQZr8sWk-KslChWXBNoHw_TxLUL9c"
              alt="location icon"
            />
            {props.city} | {props.country} <hr />
          </h4>
        )}

        {props.Temperature && (
          <p className="info_key">
            <img
              className="img2"
              src="https://www.clipartmax.com/png/middle/226-2260634_temperature-png-room-temperature-icon-png.png"
              alt="temperature icon"
            />
            <span className="info_value">
              {`${Math.floor(props?.Temperature)}°C`} <span>Temperature</span>{" "}
            </span>
          </p>
        )}

        {props.humidity && (
          <p className="info_key">
            <img
              className="img2"
              src="https://cdn-icons-png.flaticon.com/512/1163/1163597.png"
              alt="humidity icon"
            />
            <span className="info_value">
              {" "}
              {props.humidity}% <span>Humidity</span>{" "}
            </span>
          </p>
        )}

        {props.description && (
          <p className="info_key">
            <img
              className="img2"
              src="https://freesvg.org/img/1489136024.png"
              alt="description icon"
            />

            <span className="info_value">
              {" "}
              {props.description} <span>Description</span>{" "}
            </span>
          </p>
        )}

        {props.error && <p className="error"> {props.error}</p>}
      </div>
    </div>
  );
};

export default Weather;
