import { index } from './index.ts';
import { expect } from 'vitest';

describe(index, () => {
  it('should inject resize format after the hostname in the uri', () => {
    expect(index('https://unsplash.com/waterfalls.jpeg')).toBe(
      'https://unsplash.com/resize/244x120/waterfalls.jpeg'
    );
    expect(index('https://unsplash.com/api/v2/watermelon.png')).toBe(
      'https://unsplash.com/resize/244x120/api/v2/watermelon.png'
    );
  });
});
