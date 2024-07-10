import { expect } from 'vitest';
import { optimizeImageUri } from './index.ts';

describe(optimizeImageUri, () => {
  it('should inject resize format after the hostname in the uri', () => {
    expect(optimizeImageUri('https://unsplash.com/waterfalls.jpeg')).toBe(
      'https://unsplash.com/resize/244x120/waterfalls.jpeg'
    );
    expect(optimizeImageUri('https://unsplash.com/api/v2/watermelon.png')).toBe(
      'https://unsplash.com/resize/244x120/api/v2/watermelon.png'
    );
  });
  it('should return the original URI when given an invalid URI', () => {
    const invalidUri = 'thisIsNotValidUri';
    expect(optimizeImageUri(invalidUri)).toBe(invalidUri);
  });
});
