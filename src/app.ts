import P5 from "p5";
import "p5/lib/addons/p5.dom";
import { FRAMERATE, SEGMENTS_AMMOUNT, FULL_SEG_HEIGHT } from "./const";
import segment from "./segment";

import "./styles.scss";

const sketch = (p5: P5) => {
  const segments = [];

  p5.setup = () => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);

    p5.frameRate(FRAMERATE);
    p5.noFill();
    p5.stroke("#191919");
    p5.strokeWeight(2);

    for (let e = 0; e < SEGMENTS_AMMOUNT; e++) {
      segments.push(new segment(p5, FULL_SEG_HEIGHT * e, e));
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.background("#F1E8B8");
    segments.forEach((s) => s.draw());
  };
};

new P5(sketch);
