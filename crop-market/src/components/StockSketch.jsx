import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
let t
let rn

const StockSketch = ({ seed, time }) => {
  const containerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const MAX_POINTS = 1000;
  let t = 0;

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
        p.strokeWeight(5);
        p.noiseDetail(5);
        p.stroke(0);
      };

      p.draw = () => {
        p.clear();
        if (points.length > 0) {
          let topLevel = points.reduce((a, b) => Math.max(a, b), -10) + 0.1;
          let bottomLevel = points.reduce((a, b) => Math.min(a, b), 10) - 0.1;
          let gap = p.width / points.length;
          for (let i = 1; i < points.length; i++) {
            p.line(
              (i - 1) * gap,
              normalizePoint(points, i - 1, topLevel, bottomLevel, p.height),
              i * gap,
              normalizePoint(points, i, topLevel, bottomLevel, p.height)
            );
          }
        }
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);

    // Cleanup on component unmount
    return () => {
      p5Instance.remove();
    };
  }, [points]);

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

  const normalizePoint = (points, i, topLevel, bottomLevel, height) => {
    return ((points[i] - bottomLevel) / (topLevel - bottomLevel)) * height;
  };

  const getStockPoint = (t, s) => {
    return p5.prototype.noise(t, s * 100);
  };

  return <div ref={containerRef} />;
};

export const getT = () => {
  return t
}

export const getP = (t) => {
  return rn
}

export default StockSketch;