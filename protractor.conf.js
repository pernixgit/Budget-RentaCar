exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8100/#/',
  specs: ['tests/e2e/*.spec.js']
}
