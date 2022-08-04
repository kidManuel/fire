import P5 from "p5";
import "p5/lib/addons/p5.dom";
import { SEGMENTS_AMMOUNT, STEP_SIZE } from "./const";
import segment from "./segment";

import "./styles.scss";

const sketch = (p5: P5) => {
  const segments = [];

  p5.setup = () => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);

    // for (let i = 0; i < SEGMENTS_AMMOUNT; i++) {
    segments.push(new segment(p5));
    // }

    const c = p5.color(255, 114, 159, 10);

    p5.noStroke();
    p5.fill(c);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    if (segments[0].size > STEP_SIZE) {
      segments.push(new segment(p5));
    }

    p5.background("#FED99B");
    segments.forEach((s) => s.draw());
  };
};

new P5(sketch);
