const path = require("path");

module.exports = {
  root: path.resolve(__dirname,''),
  // Source files
  src: path.resolve(__dirname, "./src"),

  indexJs: path.resolve(__dirname, "./src","js","index.js"),
  criticalJs: path.resolve(__dirname, "./src","js","critical.js"),

  fonts: path.resolve(__dirname, "./src","fonts"),
  images: path.resolve(__dirname, "./src","images"),

  scss: path.resolve(__dirname, "./src","scss"),
  scssLayouts: path.resolve(__dirname, "src","scss","layouts"),
  scssComponents: path.resolve(__dirname, "src","scss","components"),
  scssUtils: path.resolve(__dirname, "./src","scss","utils"),
  // Production build files
  build: path.resolve(__dirname, "public","dist"),

};
