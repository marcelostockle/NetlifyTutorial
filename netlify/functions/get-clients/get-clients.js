const axios = require('axios')

const handler = async function () {
  try {
    const axios = require('axios')
    const data = JSON.stringify({
      "collection": "Client",
      "database": "dalila",
      "dataSource": "Cluster0",
      "sort": { "name": 1 }
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

    const response = await axios(config)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }
}

module.exports = { handler }
