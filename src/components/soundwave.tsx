import { useState, useEffect } from "react";

function getRandomHeight(minHeight: number, maxHeight: number) {
  return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
}

interface ISoundwaveProps {
  width: number;
  maxheight: number;
  stop: boolean;
}

function Soundwave({ width, maxheight, stop }: ISoundwaveProps) {
  const minHeight = 5;
  const [heights, setHeights] = useState(
    Array(6)
      .fill(null)
      .map(() => getRandomHeight(minHeight, maxheight))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!stop) {
        const newHeights = heights.map(() =>
          getRandomHeight(minHeight, maxheight)
        );
        setHeights(newHeights);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [heights, minHeight, maxheight, stop]);

  const rectangles = heights.map((height, index) => (
    <div
      key={index}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "white",
        transition: "height 0.4s ease",
        borderRadius: "10px",
      }}
    />
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "3.7px",
        }}
      >
        {rectangles}
      </div>
    </>
  );
}
export default Soundwave;
