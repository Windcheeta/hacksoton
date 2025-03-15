import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import StockSketch from './StockSketch';
import s, {getP} from './StockSketch';

const StockDisplay = ({ seed, value}) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center'}} className = "stockContainer">
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', flexDirection: "column"}} className = "stockValue">
          <span style={{ fontSize: '24px' }}>{"$"+String(Math.round(value*(1-getP())))}</span>
          <button className='buysell'>buy</button>
          <button className='buysell' style= {{ fill:"rgb(255,0,0)" }} >sell</button>
        </div>
        <div style={{ flex: 1 }} className = "stockLine">
          <StockSketch seed={seed} />
        </div>
        
      </div>
    );
  };
  
  export default StockDisplay;
  