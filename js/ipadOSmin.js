function isIpadOS() {
  var h = window.devicePixelRatio || 1
    , i = {
      width: window.screen.width * h,
      height: window.screen.height * h
  };
  return 2048 === i.width && 2732 === i.height || 2732 === i.width && 2048 === i.height || 1536 === i.width && 2048 === i.height || 2048 === i.width && 1536 === i.height || 1668 === i.width && 2388 === i.height || 2388 === i.width && 1668 === i.height || 1668 === i.width && 2224 === i.height || 2224 === i.width && 1668 === i.height
}
