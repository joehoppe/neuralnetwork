module.exports = {
    collectCoverageFrom: [
        '**/*.ts',
        '!test/**/*',
        '!jest.config.ts',
    ],
    displayName: 'unit',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['.d.ts', '.js'],
    roots: ['<rootDir>'],
    testMatch: [
        '<rootDir>/test/unit/**/*.test.ts'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    clearMocks: true,
}