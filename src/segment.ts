import P5 from "p5";
import { COLOR_A, INITIAL_SIZE, STEP_SIZE } from "./const";

export default class segment {
  p5 = null;
  size: number;
  color: string;
  position: P5.Vector;

  constructor(p5: P5) {
    this.p5 = p5;
    this.size = INITIAL_SIZE;
    this.color = COLOR_A;
    this.position = this.p5.createVector(0, 0);
  }

  draw() {
    // this.p5.stroke(this.color);
    if (this.size < STEP_SIZE) {
      this.size = INITIAL_SIZE;
      this.position.set(0, 0);
    } else {
      this.position.sub(0, STEP_SIZE);
      this.size -= STEP_SIZE;
    }

    const cx = this.position.x + this.p5.mouseX;
    const cy = this.position.y + this.p5.mouseY;
    const coff =
      this.p5.noise(
        this.position.x * 0.05,
        this.position.y * 0.05,
        this.p5.frameCount * 0.01
      ) * 70;

    this.p5.circle(cx + coff, cy, this.size);
  }
}
