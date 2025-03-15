import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
let t
let rn

const StockSketch = ({ seed, time }) => {
  const containerRef = useRef(null);
  

  useEffect(() => {
    const sketch = (p) => {
      const MAX_POINTS = 1000;
      let points = [];
      t = 0

      p.setup = () => {
        p.createCanvas(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
        p.strokeWeight(5);
        p.noiseDetail(5);
        p.stroke(0);
      };

      p.draw = () => {
        p.clear();
        let topLevel = points.reduce((a, b) => p.max(a, b), -10) + 0.1;
        let bottomLevel = points.reduce((a, b) => p.min(a, b), 10) - 0.1;
        let gap = p.width / points.length;

        for (let i = 1; i < points.length; i++) {
          //p.stroke(points[0] - points[i] < 0 ? [100, 0, 0] : [0, 100, 0]);
          p.line(
            (i - 1) * gap,
            normalizePoint(i - 1, topLevel, bottomLevel),
            i * gap,
            normalizePoint(i, topLevel, bottomLevel)
          );
        }
        
        p.line()
        points.shift();
        while (points.length < MAX_POINTS) {
          points.push(getStockPoint(t, seed));
        }
        console.log(time)
        t+=0.01
      };

      const normalizePoint = (i, t, b) => {
        rn = points[points.length-1]
        return ((points[i] - b) / (t - b)) * p.height;
      };

      const getStockPoint = (t, s) => {
        return p.noise(t, s * 100);
      };
      
    };

    
    const p5Instance = new p5(sketch, containerRef.current);
    
    // Cleanup on component unmount
    return () => {
      p5Instance.remove();
    };
  }, [seed, time]);
  
  return <div ref={containerRef} />;
};



export const getT = () => {
  return t
}

export const getP = (t) => {
  return rn
}

export default StockSketch;