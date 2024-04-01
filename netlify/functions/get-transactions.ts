import { HandlerEvent, HandlerResponse } from '@netlify/functions';
import { MongoClient } from 'mongodb';

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri || "");

  try {
    await client.connect();
    // Realize operações no banco de dados
    const collection = client.db('dt-money').collection('transactions');
    // encontrar todos os documentos
    const result = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Erro ao conectar com o MongoDB' }),
    };
  } finally {
    await client.close();
  }
};
