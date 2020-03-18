module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: [
        '**/src/**/*.spec.(js|jsx|ts|vue|tsx.vue)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    setupFiles: ['./src/setup-jest.js'],
    collectCoverage: true,
    collectCoverageFrom: ['**/src/**/*.{js,vue}', '!**/src/**/{index,routes,stores,router}.{js,vue}', '!**/(node_modules|assets)/**'],
};
