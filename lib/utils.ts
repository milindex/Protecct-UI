function isMobile() {
  // Use media query to detect mobile device
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return isMobile;
}

const utils = {
  isMobile,
};

export default utils;