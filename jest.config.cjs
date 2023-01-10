module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
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
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
 },
};
