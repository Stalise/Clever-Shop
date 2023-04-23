import type { Config } from '@jest/types';

const reportType = process.env.JEST_REPORT ? 'html' : 'text-summary';

const config: Config.InitialOptions = {
    // Jest execution environment. Node doesn't fit, because browser things don't work
    testEnvironment: 'jsdom',
    // preset that is used as the basis for configuring Jest
    preset: 'ts-jest',
    // specifies should to report each individual test at runtime
    verbose: true,
    // formats in which the test coverage is collected
    coverageReporters: [reportType],
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    // cleans the moks after each it()
    clearMocks: true,
    // Jest runs the code as JS, so when using TS, it needs to be converted via the installed ts-jest package
    transform: {
        '^.+\\.ts$': '<rootDir>/node_modules/ts-jest',
    },
    // unit tests in the project are defined by test.ts
    testMatch: ['**/*.test.ts'],
    // Array of names in which Jest searches for the files it needs.
    // src path for aliases configured in the ts.config folder.
    moduleDirectories: ['node_modules', 'src'],
};

export default config;
