import React, {useState, useEffect} from 'react';
import StockDisplay from './components/StockDisplay.jsx';
import s, {values} from './components/StockSketch';

const App = () => {
  const [seed, setSeed] = useState(0);
  const [t, setT] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setT((time) => {
        console.log(values)
        return time + 1});
    }, 100); // Increment every second

    //console.log(interval)
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Stock Market Visualization</h1>
      <div style={{ display: 'flex', flexDirection: "column"}}>
        <div style={{ flex: 1, flexDirection: 'row'}}>
          <StockDisplay seed={0} value="$1000" />
        </div>
        <div style={{ flex: 1, flexDirection: 'row'}}>
          <StockDisplay seed={1} value="$1050" />
        </div>
      </div>
    </div>
  );
};

export default App;