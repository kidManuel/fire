import P5 from "p5";
import {
  MAX_AGE,
  MAX_SEG_WIDTH,
  MAX_SEG_HEIGHT,
  AGING_SPEED,
  sizeFunc,
  MIN_SEG_WIDTH,
  FULL_SEG_HEIGHT,
} from "./const";

export default class segment {
  p5 = null;
  age: number = AGING_SPEED;

  constructor(p5: P5, initialAge: number) {
    this.p5 = p5;
    this.age = initialAge;
  }

  draw() {
    if (this.age >= MAX_AGE + FULL_SEG_HEIGHT) {
      this.age -= MAX_AGE + FULL_SEG_HEIGHT;
    }
    const width = this.getWidth();
    const height = this.getHeight();
    const baseline = this.p5.mouseY;
    const center = this.p5.mouseX;
    this.p5.rect(
      center - width / 2,
      Math.max(baseline - this.age, baseline - MAX_AGE),
      width,
      height,
      5
    );
    this.ageSelf();
  }

  ageSelf() {
    this.age += AGING_SPEED;
  }

  getHeight() {
    if (this.age < MAX_SEG_HEIGHT) {
      return this.age;
    }
    if (this.age > MAX_AGE) {
      const n = MAX_SEG_HEIGHT - (this.age - MAX_AGE);
      return Math.max(0, n);
    }

    return MAX_SEG_HEIGHT;
  }

  getWidth() {
    const w = Math.max(
      sizeFunc(this.remapLifetime()) * MAX_SEG_WIDTH,
      MIN_SEG_WIDTH
    );
    return w;
  }

  remapLifetime() {
    return this.p5.map(this.age, 0, MAX_AGE, 0, 1, true);
  }
}
