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
  posX: number;
  posY: number;

  constructor(p5: P5, initialAge: number) {
    this.p5 = p5;
    this.age = initialAge;
    this.posX = this.p5.mouseX;
    this.posY = this.p5.mouseY;
  }

  draw() {
    if (this.age >= MAX_AGE + FULL_SEG_HEIGHT) {
      this.age -= MAX_AGE + FULL_SEG_HEIGHT;
    }
    const width = this.getWidth();
    const height = this.getHeight();

    const baseline = this.p5.mouseY;

    this.posY = Math.max(baseline - this.age, baseline - MAX_AGE);

    if (this.posX !== this.p5.mouseX) {
      const deltaX = this.p5.mouseX - this.posX;
      const remap = 1 - this.remapLifetime();
      const displacement = deltaX * remap;

      this.posX += displacement;
    }
    this.p5.rect(this.posX - width / 2, this.posY, width, height, 5);
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
