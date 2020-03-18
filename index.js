var config = require('./config')

const axios = require('axios')
const { send } = require('micro')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET'] })
const DOMAIN = config.api_url
const varToken = config.api_token

const handler = async function(req, res) {
  const params = req.url
  const path = `${DOMAIN}${params}`
  
  const response = await axios({
    method: 'get', 
    url: path,
    headers: {
      Accept: "application/json",
      Authorization: 'Bearer ' + varToken
    }
  })
  
  send(res, 200, response.data)
}

module.exports = cors(handler)
