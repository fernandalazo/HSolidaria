// karma.conf.cjs — configuración estable y compatible

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'src/**/*.test.js',
      'src/**/*.test.jsx',
    ],

    preprocessors: {
      'src/**/*.test.js': ['esbuild', 'coverage'],
      'src/**/*.test.jsx': ['esbuild', 'coverage'],
    },

    esbuild: {
      jsx: 'automatic',
      loader: { '.js': 'jsx', '.jsx': 'jsx' },
      sourcemap: 'inline',
      target: 'es2020',
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
      ],
      includeAllSources: true,
      instrumenterOptions: { esModules: true },
    },

    browsers: ['ChromeHeadless'],
    singleRun: true,
    colors: true,
    logLevel: config.LOG_INFO,
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-esbuild',
    ],
  });
};
