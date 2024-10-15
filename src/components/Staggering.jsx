import React from "react";
import anime from "animejs";

const Staggering = () => {
  return (
    <div className="relative grid place-content-center bg-transparent px-8 py-12">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 70;
const GRID_HEIGHT = 30;

const DotGrid = () => {
  const handleDotHover = (e) => {
    anime({
      targets: ".dot-point",
      backgroundColor: [
        { value: "#ca2d2e", easing: "easeOutSine", duration: 250 },
        { value: "#4b5563", easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(50, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
        start: 0,
        easing: "easeOutCubic",
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-slate-700 opacity-50"
            data-index={index}
            onMouseEnter={handleDotHover} // Trigger on mouse hover
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default Staggering;
