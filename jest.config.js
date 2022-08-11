module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '<rootDir>/reports/jest' }],
  ],
  testEnvironment: 'jsdom',
};
