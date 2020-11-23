import React, { useState, useEffect } from "react";
import "./App.css";

const apiKey = "dcf40aa8-9b14-488c-b444-7e43ab403ca0";
const url = "https://api.thecatapi.com/v1/images/search";
function App() {
  const [catUrl, setCatUrl] = useState("testing");

  useEffect(() => {
    getCat();
  }, []);

  const getCat = () => {
    fetch(url, {
      "x-api-key": apiKey,
    })
      .then((res) => res.json())
      .then((cats) => {
        const catURL = cats[0].url;
        setCatUrl(catURL);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <div className="App">
      <h1>Random Cats</h1>
      <img src={catUrl} alt="" />
      <button onClick={getCat}>Get a new cat picture</button>
    </div>
  );
}

export default App;
