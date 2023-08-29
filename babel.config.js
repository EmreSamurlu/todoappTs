/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@types': './src/types',
          '@screens': './src/screens',
          '@components': './src/components',
          '@features': 'src/redux/features',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
