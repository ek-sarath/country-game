import React, {useState} from "react";

const CountryCapital = ({data}) => {
  const [entries, setEntries] = useState(() => {
    return Object.entries(data).sort(() => Math.random() - 0.5);
  });

  const [state, setState] = useState({
    country: "",
    capital: "",
    correct: false,
  });

  const checkAnswer = (country, capital) => {
    if (data[country] === capital) {
      const filteredEntries = entries.filter(
        ([c, cap]) => !(c === country && cap === capital)
      );
      setEntries(filteredEntries);
      setState({ country: "", capital: "", correct: true });
    } else {
      setState({ country, capital, correct: false });
    }
  };


  return (
    <div className="countryCapital">
      <h1>Country to Capital Matching Game</h1>
      <p>NB: You need to match a country to its capital by clicking on appropriate buttons</p>

      {entries.length > 0 ? (
        <div className="buttonContainer">
          {entries.map(([country, capital]) => (
            <div key={country}>
              <button
                style={{
                  backgroundColor: state.country === country ? "#0000ff" : "",
                }}
                onClick={() => checkAnswer(country, state.capital)}
              >
                {country}
              </button>
              <button
                style={{
                  backgroundColor: state.capital === capital ? "#0000ff" : "",
                }}
                onClick={() => checkAnswer(state.country, capital)}
              >
                {capital}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h3>Congratulations You Won The Game!!!</h3>
      )}
    </div>
  );
};

export default CountryCapital;