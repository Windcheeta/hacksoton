import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import StockSketch from './StockSketch';

const StockDisplay = ({ seed, t, value }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }} className = "stockContainer">
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }} className = "stockValue">
          <span style={{ fontSize: '24px' }}>{value}</span>
        </div>
        <div style={{ flex: 1 }} className = "stockLine">
          <StockSketch seed={seed} t={t} />
        </div>
        
      </div>
    );
  };
  
  export default StockDisplay;
  