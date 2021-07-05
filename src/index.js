import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = (coins) => {
  const [coinData, setCoinData] = useState([]);
  const [coin, setCoin] = useLocalStorage("bitcoin")

  const handleChange = e => {
    setCoin(e.target.value)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

    axios
       .get(
        `https://api.coingecko.com/api/v3/coins/${coin}/`
       )
       .then(response => {
         console.log(response);
         setCoin(response.data)
       })
       .catch(error => {
         console.log(error);
       }, [coin]);


  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} coin={coin} handleChange={handleChange} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
