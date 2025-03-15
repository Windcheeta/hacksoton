import React, {useState} from 'react';
import StockDisplay from './components/StockDisplay.jsx';

const App = () => {
  const [seed, setSeed] = useState(0);
  const [t, setT] = useState(0);

  return (
    <div style={{ width: '100vw', height: '100vh', padding:'2em'}}>
      <h1>Stock Market Visualization</h1>
      <div style={{ display: 'flex', flexDirection: "column"}}>
        <div style={{ flex: 1, flexDirection: 'row'}}>
          <StockDisplay seed={0} time={t} value="$1000" />
        </div>
        <div style={{ flex: 1, flexDirection: 'row'}}>
          <StockDisplay seed={1} time={t} value="$1050" />
        </div>
      </div>
    </div>
  );
};

export default App;