import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const StockSketch = ({ seed }) => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      const MAX_POINTS = 500;
      const PADDING = 100;
      let points = [];
      let t = seed; // Use the seed prop

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.strokeWeight(5);
        p.noiseDetail(5);
        p.stroke(0);
      };

      p.draw = () => {
        p.clear();
        let topLevel = points.reduce((a, b) => p.max(a, b), -10) + 0.1;
        let bottomLevel = points.reduce((a, b) => p.min(a, b), 10) - 0.1;
        let gap = p.windowWidth / points.length;

        for (let i = 1; i < points.length; i++) {
          p.stroke(points[0] - points[i] < 0 ? [100, 0, 0] : [0, 100, 0]);
          p.line(
            (i - 1) * gap,
            normalizePoint(i - 1, topLevel, bottomLevel),
            i * gap,
            normalizePoint(i, topLevel, bottomLevel)
          );
        }

        p.line(
          0,
          normalizePoint(0, topLevel, bottomLevel),
          p.windowWidth,
          normalizePoint(0, topLevel, bottomLevel)
        );

        points.shift();
        while (points.length < MAX_POINTS) {
          points.push(getStockPoint(t));
          t += 0.005;
        }
        t += 0.001;
      };

      const normalizePoint = (i, t, b) => {
        return ((points[i] - b) / (t - b)) * p.windowHeight;
      };

      const getStockPoint = (t) => {
        return p.noise(t);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [seed]); // Add seed to dependency array

  return <div ref={sketchRef}></div>;
};

export default StockSketch;