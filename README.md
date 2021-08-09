# Playwright-test-example

## About
A simple example using playwright and generate reports with allure.

## Pre-requisites
* [Node.js](https://nodejs.org/en/download/)
* [Allure-Commandline](https://www.npmjs.com/package/allure-commandline)
* Any Code Editor like [VSCode](https://code.visualstudio.com/)
* Create .env archive or rename .env.example and set the URL environment correctly. I'm using a brazilian e-commerce https://kabum.com.br

## Installation
* Clone this repository
`$ git clone https://github.com/henriquetmartins/playwright-test-example.git` 

*  Access the project folder cmd/terminal
`$ cd playwright-test-example`

* Install the dependencies 
`$ npm install` 

* Install allure-commandline if you don't yet.
`$ npm install -g allure-commandline` 


## Running Tests
#### Running all tests
`$ npm test` 


#### Running test with tag
Before do it, you need to set your tag in test name
```javascript
    test(`FOO TEST @foo`, async({ page }) => {       
        // IMPLEMENTATION
    })
```
then use test-tag script and pass you tag in cmd run
`$ npm run test-tag @foo` 


## Generate Reports
After tests run, generate report with allure. 
`$ allure serve` 
In playwright.config.js we set configs to make printscreen allways and save trace if test fail. 

## Author

<img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/henriquetmartins" width="100px;" alt="Henrique Martins"/>

[![Linkedin Badge](https://img.shields.io/badge/-Henrique%20Martins-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henriquemartinsqa/)](https://www.linkedin.com/in/henriquemartinsqa/) 
[![Gmail Badge](https://img.shields.io/badge/-henriqueteixeiramartins@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:henriqueteixeiramartins@gmail.com)](mailto:henriqueteixeiramartins@gmail.com)


## License

This project is under the license [MIT](./LICENSE).
