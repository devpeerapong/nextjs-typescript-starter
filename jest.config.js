// Jest setup based on
// with-typescript-eslint-jest: https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest
// create-react-app: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/utils/createJestConfig.js#L25

module.exports = {
  roots: ["<rootDir>"],
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts"],
  setupFiles: ["react-app-polyfill/jsdom"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/**/*.{spec,test}.{ts,tsx}",
  ],
  testEnvironment: "jsdom",
  testRunner: "jest-circus/runner",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  modulePaths: [],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
};
