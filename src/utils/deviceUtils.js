const size = {
  mobileL: '480px',
  tablet: '768px',
  tabletL: '992px',
  desktop: '1200px',
  larger: '1800px',
}

const device = {
  mobileS: `(max-width: ${size.mobileL})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  desktop: `(min-width: ${size.desktop})`,
  larger: `(min-width: ${size.larger})`,
  laptopS: `only screen and (max-width: 1366px) and (min-device-height: 766px) and (orientation: landscape)`,
  ipad: `only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1)`,
}

export default device
