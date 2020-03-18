
const axios = require('axios')
const { send } = require('micro')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET'] })
const DOMAIN = 'http://phish.in/api/v1'
const varToken = '3781a190cb0140f485c533cf197ecee4e8e20e92385ed71e842f98c87c79d8d52043ef17088e8dbe3b25edf4401f8f93'

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
