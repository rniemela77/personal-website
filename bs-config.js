module.exports = {
  proxy: "localhost:3000",
  files: ["src/**/*", "index.html"],
  ignore: ["node_modules"],
  reloadDelay: 10,
  reloadDebounce: 10,
  reloadThrottle: 10,
  notify: false,
  open: false
} 