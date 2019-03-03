const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '11',
        firefox: '50',
        chrome: '55',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
    },
  ],
];

module.exports = { presets };
