const dotenv = require('dotenv')
dotenv.config({ path: !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ? '.env' : `.env.${process.env.NODE_ENV.trim()}` })

console.log('Ambiente Selecionado: ' + (!process.env.NODE_ENV || process.env.NODE_ENV === 'production' ? 'production' : process.env.NODE_ENV))

const env = {
  url: process.env.URL
}

module.exports = env