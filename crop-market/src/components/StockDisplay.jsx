import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import StockChart from './StockChart';

const StockDisplay = ({ seed, value, time, disaster, ico }) => {

  const containerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const MAX_POINTS = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) => {
        const newPoints = [...prevPoints, value*(getStockPoint(time,seed))+unpackDis(disaster)];
        if (newPoints.length > MAX_POINTS) {
          newPoints.shift();
        }
        return newPoints;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [seed,time,disaster]);

  const getStockPoint = (t, s) => {
    return p5.prototype.noise(t, s * 100);
  };
  
  const unpackDis = (disaster) => {
    let sum = 0
    for (let i = 0; i <disaster.length; i++){
      sum += disaster[i][1]
    }
    return sum
  }

  return (
      <div style={{ display: 'flex', alignItems: 'center'}} className = "stockContainer">
        <div style={{flex: 0 }}>
          <img src={ico} style={{height:"100px"}}>
          </img>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', flexDirection: "column"}} className = "stockValue">
        <span style={{ fontSize: '24px' }}>{"$"+String(Math.round((value*(getStockPoint(time,seed))+unpackDis(disaster))))}</span>
          <button className='buysell' style= {{ background: "rgb(0,255,0)" }} >buy</button>
          <button className='buysell' style= {{ background: "rgb(255,0,0)" }} >sell</button>
        </div>
        <div style={{ flex: 1 }} className = "stockLine">
          <StockChart points = {points}/>
        </div>
        
      </div>
  );
};
  
  export default StockDisplay;
  