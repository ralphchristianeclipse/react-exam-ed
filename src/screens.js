export const screens = {
  xs: 360,
  sm: 475,
  md: 768,
  lg: 1024,
  xl: 1440
};

export const mobileScreens = Object.entries(screens).reduce(
  (acc, [key, width]) => ({
    ...acc,
    [key]: `@media screen and (max-width: ${width}px)`
  }),
  {}
);
