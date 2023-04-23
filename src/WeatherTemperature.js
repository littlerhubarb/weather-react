import React, {useState} from "react";
import "./weatherInfo.css";


export default function WeatherTemperature(props) {
        const [unit, setUnit] = useState ("celsius");
        function convertToFarenheit (event) {
            event.preventDefault();
            setUnit("farenheit");
        }
        function convertToCelsius (event) {
            event.preventDefault();
            setUnit("celsius");
        }
        if (unit==="celsius") { 
            return (
        <span className="temp">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C | <a href="/" onClick={convertToFarenheit}>°F</a> </span>
            </span>
    )
    }
    else {
        let farenheit = (props.celsius*(9/5)) + 32
        return (
        <span className="temp">
            <span className="temperature">{Math.round(farenheit)}</span>
            <span className="unit"><a href="/" onClick={convertToCelsius}>°C</a> | °F</span>
            </span>
        )
}
}
