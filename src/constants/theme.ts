export type MediaQueryProps = {
  mobile: number;
  tablet: number;
  desktop: number;
};

const deviceSizes: MediaQueryProps = {
  mobile: 580,
  tablet: 768,
  desktop: 1024,
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  laptop: `screen and (max-width: ${deviceSizes.desktop}px)`,
};

const theme = {
  device,
};

export default theme;
