import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [medarbejdere, setMedarbejdere] = useState([]);
  const lederNummre = [
    286828, 103978, 106490, 115692, 149387, 160851, 169586, 180542, 191333,
    218368, 242894, 185653,
  ];

  useEffect(() => {
    fetch("/medarbejdere.json")
      .then((response) => response.json())
      .then((data) => setMedarbejdere(data.filter(removeLeder)));

    console.log(medarbejdere);
  }, []);

  function removeLeder(medarbejder) {
    return !lederNummre.includes(medarbejder["Person ID"]);
  }

  return (
    <div className="App">
      <h1>
        <a href="https://wheelofnames.com" target="_blank">
          Hjulet er her!
        </a>
      </h1>
      {medarbejdere.map((medarbejder) => {
        const firstNames = medarbejder.Navn.split(" ")[1];
        const lastName = medarbejder.Navn.split(" ")[0];
        return (
          <div key={medarbejder.id}>
            <p>
              {firstNames + " " + lastName} lønnummer:{" "}
              {medarbejder["Person ID"]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
