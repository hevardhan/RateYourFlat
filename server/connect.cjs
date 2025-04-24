
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hevardhan:heva2004@rf-demo.nbrkrqv.mongodb.net/?retryWrites=true&w=majority&appName=rf-demo";

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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// Your flats data
const flatsData = [
  {
    id: "flat1",
    name: "Riverside Apartments",
    address: "123 River Road",
    price: 850,
    rating: 4.5,
    reviews: 32,
    bedrooms: 2,
    bathrooms: 1,
    description: "Modern student accommodation with great river views",
    image: "/placeholder.svg",
  },
  {
    id: "flat2",
    name: "College Court",
    address: "45 University Street",
    price: 750,
    rating: 4.2,
    reviews: 28,
    bedrooms: 1,
    bathrooms: 1,
    description: "Cozy flat just 5 minutes from campus",
    image: "/placeholder.svg",
  },
  {
    id: "flat3",
    name: "The Student Hub",
    address: "78 Academic Avenue",
    price: 950,
    rating: 4.8,
    reviews: 45,
    bedrooms: 3,
    bathrooms: 2,
    description: "Spacious shared accommodation with modern amenities",
    image: "/placeholder.svg",
  },
  {
    id: "flat4",
    name: "Campus View",
    address: "12 College Lane",
    price: 800,
    rating: 3.9,
    reviews: 19,
    bedrooms: 2,
    bathrooms: 1,
    description: "Affordable flat with great campus views",
    image: "/placeholder.svg",
  },
  {
    id: "flat5",
    name: "Scholar's Retreat",
    address: "34 Wisdom Way",
    price: 1100,
    rating: 4.7,
    reviews: 37,
    bedrooms: 2,
    bathrooms: 2,
    description: "Premium accommodation with study rooms and gym",
    image: "/placeholder.svg",
  },
  {
    id: "flat6",
    name: "Uni Gardens",
    address: "56 Green Street",
    price: 700,
    rating: 4.0,
    reviews: 22,
    bedrooms: 1,
    bathrooms: 1,
    description: "Charming flat surrounded by gardens",
    image: "/placeholder.svg",
  },
];

async function insertFlats() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("rate_my_flat"); // Database name
    const flats = db.collection("flats");    // Collection name

    const result = await flats.insertMany(flatsData);
    console.log(`${result.insertedCount} flats inserted into Atlas!`);
  } catch (err) {
    console.error("Insertion error:", err);
  } finally {
    await client.close();
  }
}

// insertFlats();

// Colleges by city
const collegesData = {
  chennai: {
    anna: { name: "Anna University", flats: flatsData },
    iitm: { name: "IIT Madras", flats: flatsData },
  },
  mumbai: {
    iitb: { name: "IIT Bombay", flats: flatsData },
    mumbai_univ: { name: "University of Mumbai", flats: flatsData },
  },
  bangalore: {
    iisc: { name: "IISc Bangalore", flats: flatsData },
    christ: { name: "Christ University", flats: flatsData },
  },
  hyderabad: {
    iith: { name: "IIT Hyderabad", flats: flatsData },
    osmania: { name: "Osmania University", flats: flatsData },
  },
  delhi: {
    iitd: { name: "IIT Delhi", flats: flatsData },
    du: { name: "University of Delhi", flats: flatsData },
  },
};


// Cities data
const cities = [
  { id: 1, name: "Chennai" },
  { id: 2, name: "Mumbai" },
  { id: 3, name: "Bangalore" },
  { id: 4, name: "Hyderabad" },
  { id: 5, name: "Delhi" },
];

// Convert nested collegesData to array format
function formatCollegesData() {
  const formatted = [];
  for (const city in collegesData) {
    const colleges = collegesData[city];
    for (const id in colleges) {
      formatted.push({
        city,
        college_id: id,
        name: colleges[id].name,
        flats: colleges[id].flats,
      });
    }
  }
  return formatted;
}

// Main function to insert cities and colleges
async function insertData() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("rate_my_flat");

    // Insert into cities
    const citiesResult = await db.collection("cities").insertMany(cities);
    console.log(`${citiesResult.insertedCount} cities inserted`);

    // Insert into colleges
    const colleges = formatCollegesData();
    const collegesResult = await db.collection("colleges").insertMany(colleges);
    console.log(`${collegesResult.insertedCount} colleges inserted`);

  } catch (error) {
    console.error("Insertion error:", error);
  } finally {
    await client.close();
  }
}

// Run it
insertData();