// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const axios = require("axios")

const handler = async (event) => {
  const axios = require('axios')
  const data = JSON.stringify({
    "collection": "Product",
    "database": "dalila",
    "dataSource": "Cluster0",
    "sort": { "category": 1 }
  })
          
  const config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-zwswv/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.MONGODB_APIKEY,
    },
    data: data
  }
          
  axios(config)
    .then(function (response) {
      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
      }
    })
    .catch(function (error) {
      return { statusCode: 500, body: error.toString() }
    });
}

module.exports = { handler }
