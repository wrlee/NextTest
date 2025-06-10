import { console } from 'inspector';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let dbConnection;

export async function connectToDatabase() {
  if (dbConnection) {
    return dbConnection;
  }

  try {
    await client.connect();
    dbConnection = client.db(); // You can specify a database name here if needed, e.g., client.db('your_database_name')
    console.log("Successfully connected to MongoDB.");
    return dbConnection;
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// Optional: Add a function to close the connection when the application exits
process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed.');
  process.exit(0);
});