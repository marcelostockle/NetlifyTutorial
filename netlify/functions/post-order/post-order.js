const axios = require('axios')

const handler = async function (event) {
  try {
    console.log("DEBUGGING post-order")
    console.log(event.body)
    const axios = require('axios')
    const data = JSON.stringify({
      "collection": "Order",
      "database": "dalila",
      "dataSource": "Cluster0",
      "document": JSON.parse(event.body).payload
    })
    
    const config = {
      method: 'post',
      url: 'https://data.mongodb-api.com/app/data-zwswv/endpoint/data/v1/action/insertOne',
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
      body: JSON.stringify({ msg: "Order entered successfully" })
    }
  } catch (err) {
    // output to netlify function log
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }
}

module.exports = { handler }
