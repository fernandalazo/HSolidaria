
// Configuración de Karma + Jasmine + esbuild con plugins explícitos  (navegador Edge)
// Además configuramos EdgeHeadless para Windows, aunque puedes usar ChromeHeadless si tienes Chrome.

module.exports = function (config) {
  config.set({
    // Carga explícita de plugins (evitar dependencia del autoload
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-esbuild'),
      // Usa uno de estos launchers según tu navegador disponible:
      require('karma-edge-launcher'),   // Edge // require('karma-chrome-launcher') --> si se usa Chrome 
    ],

    // 1) Framework
    frameworks: ['jasmine'],

    // 2) Archivos: setup + tests
    files: [
      { pattern: 'test/setup.test.js', watched: false },
      { pattern: 'src/**/*.test.jsx', watched: false }
    ],

    // 3) Preprocesadores con esbuild (soporta ESM/JSX)
    preprocessors: {
      'test/setup.test.js': ['esbuild'],
      'src/**/*.test.jsx': ['esbuild']
    },

    esbuild: {
      jsx: 'automatic',
      loader: { '.js': 'jsx', '.jsx': 'jsx' },
      sourcemap: 'inline',
      target: 'es2020'
    },

    // 4) Reportes
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ],
      includeAllSources: true
    },

    // 5) Cliente (Contexto de pruebas)
    client: { clearContext: false },

    // 6) Navegador Windows con Edge
    browsers: ['EdgeHeadless'],

    singleRun: true
  });
};
