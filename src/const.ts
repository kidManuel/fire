export const FRAMERATE = 30;
export const MAX_AGE = 600;
export const LIFETIME = 8; /** in secs */

export const MIN_SEG_WIDTH = 5;
export const MAX_SEG_WIDTH = 400;

export const MAX_SEG_HEIGHT = 17;
export const SEG_MARGIN = 3;
export const FULL_SEG_HEIGHT = MAX_SEG_HEIGHT + SEG_MARGIN;

export const AGING_SPEED = MAX_AGE / (LIFETIME * FRAMERATE);

export const sizeFunc = (x: number) => {
  const a = 1 - Math.pow(1 - x, 7);
  const b = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  return a - b;
};

export const SEGMENTS_AMMOUNT = Math.floor(MAX_AGE / FULL_SEG_HEIGHT) + 1;
