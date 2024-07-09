export const optimizeImageUri = (uri: string): string => {
  try {
    const url = new URL(uri);
    return `${url.origin}/resize/244x120${url.pathname}`;
  } catch (error) {
    console.error('Invalid URI', error);
    return uri;
  }
};
