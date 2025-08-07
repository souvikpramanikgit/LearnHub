module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' } }, 
    ],
    [
      '@babel/preset-react',
      { 
        runtime: 'automatic', 
        development: process.env.NODE_ENV === 'test', 
      },
    ],
    '@babel/preset-typescript',
  ],
};