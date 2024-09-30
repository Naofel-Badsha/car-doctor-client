const express = require('express');
const cors = require('cors');
//const jwt = require('jsonwebtoken');
//const cookieParser = require('cookie-parser');

//const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

//-----Middleware------



//---------MongoDb-------Import-----Batabase-------
const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.DB_PASS}@cluster0.8tunxxp.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

   //-------mani---Cullection--------batabase----name------
    const serviceCullection = client.db('carDoctorServices').collection('services');
    //---------booking-----Cullection-------database-----name-----
    const bookingCullection = client.db('carDoctorServices').collection('bookings');
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




