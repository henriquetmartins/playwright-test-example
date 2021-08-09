const env = require('./config')

const config = {

    reporter: [
        ['list'],
        ['allure-playwright']
    ],
    projects: [
        {
            name: 'Chrome',
            use: {
            browsers: 'chromium',
            headless: false,
            ignoreHTTPSErrors: true,
            screenshot: 'on',
            trace: 'retain-on-failure',
            baseURL: env.url
          }
        }
    ]
}

module.exports = config
