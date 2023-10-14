import './App.css';
import CountryCapital from "./components/CountryCapital";

function App() {
  const data = {
    "India": "New Delhi",
    "Australia": "Canberra",
    "France": "Paris",
    "Italy": "Rome",
    "Albania": "Tirane",
    "Greece": "Athens",
  }

  return (
      <CountryCapital data={data} />
  );
}

export default App;