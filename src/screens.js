export const screens = {
  xxxl: 1920,
  xxl: 1600,
  xl: 1440,
  lg: 1280,
  md: 1024,
  sm: 768,
  xs: 320
};

export const mobileScreens = Object.entries(screens).reduce(
  (acc, [key, width]) => ({
    ...acc,
    [key]: `@media screen and (min-width: ${width}px)`
  }),
  {}
);
