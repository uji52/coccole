module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    //'\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/tests/unit/__mocks__/fileMock.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    //'\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/tests/unit/__mocks__/fileMock.js',
    //'\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
}