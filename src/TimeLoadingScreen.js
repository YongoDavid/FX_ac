import React, { useEffect, useRef } from 'react';

const TimeLoadingScreen = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const candlestickWidth = 15;
    const totalCandlesticks = Math.floor(canvas.width / candlestickWidth);
    const candlestickData = [];

    // Initialize candlestick data with staggered start for red and green
    for (let i = 0; i < totalCandlesticks; i++) {
      candlestickData.push({
        x: i * candlestickWidth,
        initialY: canvas.height / 2,
        height: Math.random() * 100 + 50,
        color: i % 2 === 0 ? '#ff0000' : '#00ff00', // Red starts first
        isMovingUp: i % 2 !== 0, // Green moves up, Red moves down
        speed: Math.random() * 1 + 0.5 // Random speed for each candle
      });
    }

    let elapsedTime = 0;
    const duration = 120000;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      candlestickData.forEach((candle, i) => {
        // Determine the direction of movement based on color
        if (candle.color === '#ff0000') {
          // Red candles move downward in a graph-like oscillation
          if (candle.isMovingUp) {
            candle.initialY -= candle.speed; // Move up
            if (candle.initialY <= canvas.height / 2 - 50) candle.isMovingUp = false;
          } else {
            candle.initialY += candle.speed; // Move down
            if (candle.initialY >= canvas.height / 2 + 50) candle.isMovingUp = true;
          }
        } else if (candle.color === '#00ff00') {
          // Green candles move upward in a graph-like oscillation
          if (candle.isMovingUp) {
            candle.initialY -= candle.speed; // Move up
            if (candle.initialY <= canvas.height / 2 - 50) candle.isMovingUp = false;
          } else {
            candle.initialY += candle.speed; // Move down
            if (candle.initialY >= canvas.height / 2 + 50) candle.isMovingUp = true;
          }
        }

        // Draw the candlestick with current position and color
        ctx.fillStyle = candle.color;
        ctx.fillRect(candle.x, candle.initialY, candlestickWidth, candle.height);
      });

      elapsedTime += 100;

      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default TimeLoadingScreen;
