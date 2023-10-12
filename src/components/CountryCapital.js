import React from "react";

const data = {
  "India": "New Delhi",
  "Australia": "Canberra",
  "France": "Paris",
  "Italy": "Rome",
  "Albania": "Tirane",
  "Greece": "Athens",
};

const CountryCapital = () => {
  return (
    <div className="countryCapital">
      <h1>Country to Capital Matching Game</h1>
      <p>NB : You need to match a country to its capital by clicking on appropriate buttons</p>

       <div className="buttonContainer">
        {Object.entries(data).map(([country, capital]) => (
          <button key={country}>{country}</button>
        ))}
        {Object.entries(data).map(([country, capital]) => (
          <button key={capital}>{capital}</button>
        ))}
        
       </div>
    </div>
  );
};

export default CountryCapital;
