export const FRAMERATE = 30;
export const INITIAL_MAX_AGE = 550;
export const LIFETIME = 5; /** in secs */

export const MIN_SEG_WIDTH = 10;
export const MAX_SEG_WIDTH = 400;

export const MAX_SEG_HEIGHT = 45;
export const SEG_MARGIN = 10;
export const FULL_SEG_HEIGHT = MAX_SEG_HEIGHT + SEG_MARGIN;

export const sizeFunc = (x: number) => {
  const a = 1 - Math.pow(1 - x, 7);
  const b = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  return a - b;
};

export const SEGMENTS_AMMOUNT =
  Math.floor(INITIAL_MAX_AGE / FULL_SEG_HEIGHT) + 1;

export const MAX_AGE = (SEGMENTS_AMMOUNT - 1) * FULL_SEG_HEIGHT;
export const AGING_SPEED = MAX_AGE / (LIFETIME * FRAMERATE);

export const MIN_MOVEMENT = 10;
export const MAX_FALLOFF = 100;
