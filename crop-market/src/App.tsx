import React, {useState, useEffect} from 'react';
import StockDisplay from './components/StockDisplay.jsx';
import paper from './pics/paper.jpg';
import {disaster} from './components/crashes.js'

const App = () => {
  const [seed, setSeed] = useState(0);
  const [time, setTime] = useState(0);
  const [disr, setDisr] = useState([["famine",-100000,2]]);
  const probabilities = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100));
  
  useEffect(() => {
    const interval = setInterval(() => {

      setTime((time) => {
        return time + 0.01});
    }, 100);
    return () => clearInterval(interval);
  }, [disr]);

  return (
    <div>
      <img src={paper} style={{position: "absolute", width: "100%", height: "100%", zIndex: -1, top: "0px", left: "0px", right: "0px", bottom: "0px"}}></img>
      <h1 style={{justifySelf:"center", margin: "20px"}} >Stock Market Visualization</h1>
      <div style={{ display: 'flex', flexDirection: "column"}}>
        <div style={{ flex: 1, flexDirection: 'row'}}>
          <StockDisplay seed={0} value={2000} time={time} disaster={disr} />
        </div>
        <div style={{ flex: 1, flexDirection: 'row'}}>
          <StockDisplay seed={1} value={1000} time={time} disaster={disr}/>
        </div>
      </div>
    </div>
  );
};

export default App;