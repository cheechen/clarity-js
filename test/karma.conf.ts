export = (config) => {
  config.set({
    basePath: "..",
    autoWatch: true,
    frameworks: ["chai", "detectBrowsers", "fixture", "browserify", "jasmine"],
    files: [
      "test/clarity.fixture.html",
      {
        pattern: "test/**/*.js"
      }
    ],
    plugins: [
      "karma-chai",
      "karma-chrome-launcher",
      "karma-edge-launcher",
      "karma-firefox-launcher",
      "karma-ie-launcher",
      "karma-safari-launcher",
      "karma-detect-browsers",
      "karma-fixture",
      "karma-html2js-preprocessor",
      "karma-browserify",
      "karma-jasmine"
    ],
    browsers: ["Chrome"],
    detectBrowsers: {
      enabled: true,
      usePhantomJS: false
    },
    singleRun: true,
    preprocessors: {
      "test/*.js": ["browserify"],
      "test/*.html": ["html2js"]
    },
    reporters: ["dots"]
  });
};
