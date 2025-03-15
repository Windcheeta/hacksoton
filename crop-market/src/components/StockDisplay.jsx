import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import StockSketch from './StockSketch';
import s, {getP} from './StockSketch';
import cloth from '../pics/cloth.jpg';

const StockDisplay = ({ seed, value }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center'}} className = "stockContainer">
        <div style={{flex: 0 }}>
          <img src={cloth} style={{height:"100px"}}>
          </img>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', flexDirection: "column"}} className = "stockValue">
          <span style={{ fontSize: '24px' }}>{"$"+String(Math.round(value*(1-getP())))}</span>
          <button className='buysell' style= {{ background: "rgb(0,255,0)" }}>buy</button>
          <button className='buysell' style= {{ background: "rgb(255,0,0)" }} >sell</button>
        </div>
        <div style={{ flex: 1 }} className = "stockLine">
          <StockSketch seed={seed}/>
        </div>
        
      </div>
    );
  };
  
  export default StockDisplay;
  