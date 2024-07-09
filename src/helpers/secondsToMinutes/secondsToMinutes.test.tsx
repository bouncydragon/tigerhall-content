import { secondsToMinutes } from './index.ts';

describe(secondsToMinutes, () => {
  it('converts seconds to minutes rounding to the nearest minute', () => {
    expect(secondsToMinutes(30.87)).toBe(1);
    expect(secondsToMinutes(95)).toBe(2);
    expect(secondsToMinutes(120.99)).toBe(2);
    expect(secondsToMinutes(180)).toBe(3);
  });

  it('handles 0 and negative cases', () => {
    expect(secondsToMinutes(0)).toBe(0);
    expect(secondsToMinutes(-30)).toBe(-0);
  });
});
