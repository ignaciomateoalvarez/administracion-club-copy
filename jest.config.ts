import { pathsToModuleNameMapper } from "ts-jest";

module.exports = {
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/config/mocks/svgMock.tsx",
    ...pathsToModuleNameMapper({
      "@components/*": ["<rootDir>/src/components/*"],
      "@hooks/*": ["<rootDir>/src/hooks/*"],
      "@pages/*": ["<rootDir>/src/pages/*"],
      "@utils/*": ["<rootDir>/src/utils/*"],
      "@services/*": ["<rootDir>/src/services/*"],
      "@entity/*": ["<rootDir>/src/entity/*"],
      "@assets/*": ["<rootDir>/src/assets/*"],
      "@config/*": ["<rootDir>/src/config/*"],
    }),
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/config/mocks/fileMock.ts",
    "\\.(css|less|sass|scss)$": "<rootDir>/src/config/mocks/styleMock.ts",
  }
  // testEnvironment: "jsdom",
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  // resetMocks: true,
  // restoreMocks: true,
  // testMatch: ["<rootDir>/src/**/*.spec.ts", "<rootDir>/src/**/*.spec.tsx"],
};
