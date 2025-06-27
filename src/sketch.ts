import type p5 from "p5";

export const mySketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(110);
    p.ellipse(100, 150, 120);
  };
};
