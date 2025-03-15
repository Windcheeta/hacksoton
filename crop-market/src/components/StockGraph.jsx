import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const StockDisplay = ({ seed, value }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
        <div style={{ flex: 1 }}>
          <StockSketch seed={seed} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
          <FaChartLine size={40} style={{ marginRight: '10px' }} />
          <span style={{ fontSize: '24px' }}>{value}</span>
        </div>
      </div>
    );
  };
  
  export default StockDisplay;
  