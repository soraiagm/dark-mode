import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, coin, handleChange }) => {
  return (
    <div className="charts">
        <div>
          <select value={coin} onChange={handleChange} >
            <option value="bitcoin">Bitcoin</option>
            <option value="litecoin">Litecoin</option>
            <option value="ethereum">Ethereum</option>
          </select>
          </div>
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
