import { HandlerEvent, HandlerResponse } from '@netlify/functions';
import { MongoClient } from 'mongodb';

const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body || '');
  const client = new MongoClient(process.env.MONGO_URI || '');

  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const collection = database.collection(
      process.env.TRANSACTIONS_COLLECTION_NAME || ''
    );
    const result = await collection.insertOne(data); 

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  } finally {
    await client.close();
  }
};

exports.handler = handler;
