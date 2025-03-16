import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import StockSketch from './StockSketch';
import StockChart from './StockChart';
import s, {getP} from './StockSketch';
import s, {getT,getStockPoint} from './StockSketch';
import cloth from '../pics/cloth.jpg';

const StockDisplay = ({ seed, value,time,effect }) => {
  let E = effect
  const changeEffect = () => {
    console.log(E)
      E++
  }
    return (
      <div style={{ display: 'flex', alignItems: 'center'}} className = "stockContainer">
        <div style={{flex: 0 }}>
          <img src={cloth} style={{height:"100px"}}>
          </img>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', flexDirection: "column"}} className = "stockValue">
          <span style={{ fontSize: '24px' }}>{"$"+String(Math.round((value*(1-getStockPoint(time,seed))*E)))}</span>
          <button className='buysell' style= {{ background: "rgb(0,255,0)" }} function={changeEffect}>buy</button>
          <button className='buysell' style= {{ background: "rgb(255,0,0)" }} >sell</button>
        </div>
        <div style={{ flex: 1 }} className = "stockLine">
          <StockChart points = {Array(100).fill(0).map( (_,i) => i )}/>
        </div>
        
      </div>
    );
  };
  
  export default StockDisplay;
  