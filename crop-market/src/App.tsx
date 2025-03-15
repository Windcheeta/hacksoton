import React, {useState, useEffect} from 'react';
import StockDisplay from './components/StockDisplay.jsx';
import s, {getT} from './components/StockSketch';
import paper from './pics/paper.jpg';

const App = () => {
  const [seed, setSeed] = useState(0);
  const [t, setT] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setT((time) => {
        return time + 1});
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={paper} style={{position: "absolute", width: "100%", height: "100%", zIndex: -1, top: "0px", left: "0px", right: "0px", bottom: "0px"}}></img>
      <h1 style={{justifySelf:"center", margin: "20px"}} >Stock Market Visualization</h1>
      <div style={{ display: 'flex', flexDirection: "column"}}>
        <div style={{ flex: 1, flexDirection: 'row'}}>
          <StockDisplay seed={0} value={2000} />
        </div>
        <div style={{ flex: 1, flexDirection: 'row'}}>
          <StockDisplay seed={1} value={1000}/>
        </div>
      </div>
    </div>
  );
};

export default App;