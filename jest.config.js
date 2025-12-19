module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tools/generate_cloudfront_signed_cookies.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'
  ],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  setupFiles: ['<rootDir>/tests/unit/setup.js']
}