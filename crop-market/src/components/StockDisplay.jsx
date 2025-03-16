import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import StockChart from './StockChart';
import s, {getP} from './StockSketch';
import cloth from '../pics/cloth.jpg';

const StockDisplay = ({ seed, value }) => {

  const containerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const MAX_POINTS = 1000;
  let t = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) => {
        const newPoints = [...prevPoints, getStockPoint(t, seed)];
        if (newPoints.length > MAX_POINTS) {
          newPoints.shift();
        }
        t += 0.01;
        return newPoints;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [seed]);

  const getStockPoint = (t, s) => {
    return p5.prototype.noise(t, s * 100);
  };

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
          <StockChart points = {Array(100).fill(0).map( (_,i) => i )}/>
        </div>
        
      </div>
  );
};
  
  export default StockDisplay;
  