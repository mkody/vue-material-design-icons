module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '<rootDir>/reports/jest' }],
  ],
  testEnvironment: 'jsdom',
};
