// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const { MongoClient } = require("mongodb")

const mongoClient = new MongoClient(process.env.MONGODB_URI)
const clientPromise = mongoClient.connect()

const handler = async (event) => {
  try {
    const database = (await clientPromise).db("dalila")
    const collection = database.collection("Product")
    const results = collection.find({}).sort({ category:1 }).toArray()
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
