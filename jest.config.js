module.exports = {
  preset: "ts-jest",
  bail: 1, 
  clearMocks: true,
  collectCoverage: true,
  setupFiles: ["dotenv/config"],
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{ts}"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    "^·+\\.ts$": "ts-jest"
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  }
}
