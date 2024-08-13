/** @type {import('jest').Config} */
const config = {
	collectCoverage: true,
	collectCoverageFrom: ['<src/**/*.js,jsx>'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/internal/jest.setup.js'],
	transform: {
		'^.+\\.([jt]s|jsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy', // For CSS module mocking
		'^.+\\.svg$': 'jest-svg-transformer', // For SVGs
	},
	moduleFileExtensions: ['js', 'jsx'],
}

export default config
