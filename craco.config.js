const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@models": path.resolve(__dirname, "src/models"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@store": path.resolve(__dirname, "src/store"),
      "@util": path.resolve(__dirname, "src/util/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@assets(.*)$": "<rootDir>/src/assets$1",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@constants(.*)$": "<rootDir>/src/constants$1",
        "^@models(.*)$": "<rootDir>/src/models$1",
        "^@pages(.*)$": "<rootDir>/src/pages$1",
        "^@store(.*)$": "<rootDir>/src/store$1",
        "^@util(.*)$": "<rootDir>/src/util$1",
      },
    },
  },
};
