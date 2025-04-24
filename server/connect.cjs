
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
// insertData();


async function updateFlatData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('rate_my_flat'); // Replace with your DB name
    const collection = db.collection('colleges');
    const details = {
      address: "123 River Road, London",
      description:
        "Modern student accommodation with great river views. This spacious flat features two bedrooms, a fully equipped kitchen, high-speed internet, and a balcony overlooking the river. Located just 10 minutes walk from campus, with easy access to public transportation, shops, and restaurants.",
      amenities: [
        "Fully Furnished",
        "High-Speed Internet",
        "Washing Machine",
        "Dishwasher",
        "Central Heating",
        "Balcony",
        "Bike Storage",
      ],
      owner: {
        name: "John Smith",
        phone: "+44 123 456 7890",
        email: "john.smith@example.com",
      },
      reviews: [
        {
          id: "review1",
          user: "Alex Johnson",
          date: "March 15, 2023",
          rating: 5,
          comment:
            "Excellent flat! Great location, clean, and the landlord is very responsive. Highly recommend!",
        },
        {
          id: "review2",
          user: "Sam Taylor",
          date: "February 2, 2023",
          rating: 4,
          comment:
            "Very nice place to live. Good amenities and close to campus. The only downside is that it can get a bit noisy on weekends.",
        },
        {
          id: "review3",
          user: "Jamie Smith",
          date: "December 10, 2022",
          rating: 4.5,
          comment:
            "I've been living here for a year and I'm very satisfied. The flat is spacious, well-maintained, and the location is perfect for students.",
        },
      ],
    };

    const result = await collection.updateOne(
      { college_id: "iitm", "flats.id": "flat1" },
      { $set: { "flats.$.details": details } }
    );

    console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

// updateFlatData();


async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('rate_my_flat');
    const collection = db.collection('colleges');

    const document = {
      city: 'chennai',
      college_id: 'iitm',
      name: 'IIT Madras',
      flats: [
        {
          id: 'flat1',
          name: 'Riverside Apartments',
          address: '123 River Road',
          price: 850,
          rating: 4.5,
          reviews: 32,
          bedrooms: 2,
          bathrooms: 1,
          description: 'Modern student accommodation with great river views',
          image: '/placeholder.svg',
          details: {
            address: '123 River Road, London',
            description: 'Spacious 2BHK with river view balcony and all essential amenities.',
            amenities: ['Balcony', 'Wi-Fi', 'Furnished', 'Washing Machine'],
            owner: {
              name: 'John Smith',
              phone: '+44 123 456 7890',
              email: 'john.smith@example.com'
            },
            reviews: [
              { id: 'r1', user: 'Alex', date: '2023-03-15', rating: 5, comment: 'Excellent flat!' },
              { id: 'r2', user: 'Sam', date: '2023-02-02', rating: 4, comment: 'Very nice location.' }
            ]
          }
        },
        {
          id: 'flat2',
          name: 'College Court',
          address: '45 University Street',
          price: 750,
          rating: 4.2,
          reviews: 28,
          bedrooms: 1,
          bathrooms: 1,
          description: 'Cozy flat just 5 minutes from campus',
          image: '/placeholder.svg',
          details: {
            address: '45 University Street, Chennai',
            description: '1BHK cozy flat ideal for solo students, close to shops and transport.',
            amenities: ['Furnished', 'Wi-Fi', 'Security', 'Laundry'],
            owner: {
              name: 'Priya Kumar',
              phone: '+91 98765 43210',
              email: 'priya.kumar@example.com'
            },
            reviews: [
              { id: 'r3', user: 'Rahul', date: '2023-01-11', rating: 4, comment: 'Comfortable stay.' }
            ]
          }
        },
        {
          id: 'flat3',
          name: 'The Student Hub',
          address: '78 Academic Avenue',
          price: 950,
          rating: 4.8,
          reviews: 45,
          bedrooms: 3,
          bathrooms: 2,
          description: 'Spacious shared accommodation with modern amenities',
          image: '/placeholder.svg',
          details: {
            address: '78 Academic Avenue, Chennai',
            description: 'Shared 3BHK with kitchen, study desks, and fast internet.',
            amenities: ['Wi-Fi', 'Study Room', 'Shared Kitchen', '24/7 Security'],
            owner: {
              name: 'Anil Reddy',
              phone: '+91 91234 56789',
              email: 'anil.reddy@example.com'
            },
            reviews: [
              { id: 'r4', user: 'Megha', date: '2023-06-08', rating: 5, comment: 'Loved the space!' }
            ]
          }
        },
        {
          id: 'flat4',
          name: 'Campus View',
          address: '12 College Lane',
          price: 800,
          rating: 3.9,
          reviews: 19,
          bedrooms: 2,
          bathrooms: 1,
          description: 'Affordable flat with great campus views',
          image: '/placeholder.svg',
          details: {
            address: '12 College Lane, Chennai',
            description: 'Affordable 2BHK overlooking the main college grounds.',
            amenities: ['Balcony', 'Furnished', 'Basic Kitchen', 'Parking'],
            owner: {
              name: 'Shalini Rao',
              phone: '+91 93456 78901',
              email: 'shalini.rao@example.com'
            },
            reviews: [
              { id: 'r5', user: 'Hari', date: '2023-03-01', rating: 3.9, comment: 'Good value.' }
            ]
          }
        },
        {
          id: 'flat5',
          name: 'Scholar\'s Retreat',
          address: '34 Wisdom Way',
          price: 1100,
          rating: 4.7,
          reviews: 37,
          bedrooms: 2,
          bathrooms: 2,
          description: 'Premium accommodation with study rooms and gym',
          image: '/placeholder.svg',
          details: {
            address: '34 Wisdom Way, Chennai',
            description: 'Luxury 2BHK with personal study room and resident gym access.',
            amenities: ['Gym', 'Study Room', 'AC', 'Wi-Fi', 'Furnished'],
            owner: {
              name: 'Vikram Nair',
              phone: '+91 99988 88877',
              email: 'vikram.nair@example.com'
            },
            reviews: [
              { id: 'r6', user: 'Ananya', date: '2023-07-22', rating: 4.7, comment: 'Worth every rupee!' }
            ]
          }
        },
        {
          id: 'flat6',
          name: 'Uni Gardens',
          address: '56 Green Street',
          price: 700,
          rating: 4.0,
          reviews: 22,
          bedrooms: 1,
          bathrooms: 1,
          description: 'Charming flat surrounded by gardens',
          image: '/placeholder.svg',
          details: {
            address: '56 Green Street, Chennai',
            description: '1BHK in a peaceful garden area, ideal for quiet study.',
            amenities: ['Garden Access', 'Wi-Fi', 'Washing Machine', 'Gated Community'],
            owner: {
              name: 'Ritu Sharma',
              phone: '+91 87654 32109',
              email: 'ritu.sharma@example.com'
            },
            reviews: [
              { id: 'r7', user: 'Karthik', date: '2023-04-10', rating: 4.0, comment: 'Nice quiet spot.' }
            ]
          }
        }
      ]
    };

    const result = await collection.insertOne(document);
    console.log('Inserted document with _id:', result.insertedId);

  } catch (err) {
    console.error('Failed to insert document:', err);
  } finally {
    await client.close();
  }
}

run();