const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const { ObjectId } = require('mongodb');


const app = express();
app.use(cors());
app.use(express.json());  // This will parse incoming JSON payloads

const uri = "mongodb+srv://hevardhan:heva2004@rf-demo.nbrkrqv.mongodb.net/?retryWrites=true&w=majority&appName=rf-demo";
const client = new MongoClient(uri);
const dbName = "rate_my_flat";

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

// GET all cities
app.get("/api/cities", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cities = await db.collection("cities").find().toArray();
    res.json(cities);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "Failed to fetch cities" });
  }
});

// GET colleges for a specific city
app.get("/api/colleges/:cityName", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cityName = req.params.cityName.toLowerCase();
    const colleges = await db.collection("colleges").find({ city: cityName }).toArray();
    res.json(colleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);
    res.status(500).json({ error: "Failed to fetch colleges" });
  }
});

// GET specific college details
app.get("/api/colleges/:cityName/:collegeName", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cityName = req.params.cityName.toLowerCase();
    const collegeName = req.params.collegeName.toLowerCase();
    
    const college = await db.collection("colleges").findOne({
      city: cityName,
      college_id: collegeName
    });

    if (college) {
      res.json(college);
    } else {
      res.status(404).json({ error: "College not found" });
    }
  } catch (error) {
    console.error("Error fetching college:", error);
    res.status(500).json({ error: "Failed to fetch college" });
  }
});

// GET flat details for a specific college, city, and flat ID
app.get("/api/colleges/:cityName/:collegeName/flats/:flatId", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cityName = req.params.cityName.toLowerCase();
    const collegeName = req.params.collegeName.toLowerCase();
    const flatId = req.params.flatId;

    // Find the college by city and collegeName
    const college = await db.collection("colleges").findOne({
      city: cityName,
      college_id: collegeName
    });

    if (college) {
      // Search for the flat within the college's flats array by flatId
      const flat = college.flats.find(f => f.id === flatId);

      if (flat) {
        res.json(flat);
      } else {
        res.status(404).json({ error: "Flat not found" });
      }
    } else {
      res.status(404).json({ error: "College not found" });
    }
  } catch (error) {
    console.error("Error fetching flat details:", error);
    res.status(500).json({ error: "Failed to fetch flat details" });
  }
});
// READ OPERATIONS
// GET all colleges
app.get("/api/colleges", async (req, res) => {
  try {
    const db = client.db(dbName);
    const colleges = await db.collection("colleges").find().toArray();
    res.json(colleges);
  } catch (error) {
    console.error("Error fetching all colleges:", error);
    res.status(500).json({ error: "Failed to fetch colleges" });
  }
});

// GET all cities
app.get("/api/cities", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cities = await db.collection("cities").find().toArray();
    res.json(cities);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "Failed to fetch cities" });
  }
});

// GET colleges for a specific city
app.get("/api/colleges/:cityName", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cityName = req.params.cityName.toLowerCase();
    const colleges = await db.collection("colleges").find({ city: cityName }).toArray();
    res.json(colleges);
  } catch (error) {
    console.error("Error fetching colleges for city:", error);
    res.status(500).json({ error: "Failed to fetch colleges" });
  }
});

// GET specific college details
app.get("/api/colleges/:cityName/:collegeName", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cityName = req.params.cityName.toLowerCase();
    const collegeName = req.params.collegeName.toLowerCase();
    const college = await db.collection("colleges").findOne({
      city: cityName,
      college_id: collegeName
    });
    if (college) {
      res.json(college);
    } else {
      res.status(404).json({ error: "College not found" });
    }
  } catch (error) {
    console.error("Error fetching college:", error);
    res.status(500).json({ error: "Failed to fetch college" });
  }
});

// GET flat details for a specific college, city, and flat ID
app.get("/api/colleges/:cityName/:collegeName/flats/:flatId", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cityName = req.params.cityName.toLowerCase();
    const collegeName = req.params.collegeName.toLowerCase();
    const flatId = req.params.flatId;
    const college = await db.collection("colleges").findOne({
      city: cityName,
      college_id: collegeName
    });
    if (college) {
      const flat = college.flats.find(f => f.id === flatId);
      if (flat) {
        res.json(flat);
      } else {
        res.status(404).json({ error: "Flat not found" });
      }
    } else {
      res.status(404).json({ error: "College not found" });
    }
  } catch (error) {
    console.error("Error fetching flat details:", error);
    res.status(500).json({ error: "Failed to fetch flat details" });
  }
});

// CREATE a new college
app.post("/api/colleges", async (req, res) => {
  try {
    const db = client.db(dbName);
    const result = await db.collection("colleges").insertOne(req.body);
    res.json({ message: "College created", id: result.insertedId });
  } catch (error) {
    console.error("Error creating college:", error);
    res.status(500).json({ error: "Failed to create college" });
  }
});

// UPDATE college by city and college_id
app.put("/api/colleges/:cityName/:collegeId", async (req, res) => {
  try {
    const db = client.db(dbName);
    const result = await db.collection("colleges").updateOne(
      { city: req.params.cityName.toLowerCase(), college_id: req.params.collegeId.toLowerCase() },
      { $set: req.body }
    );
    if (result.matchedCount > 0) {
      res.json({ message: "College updated" });
    } else {
      res.status(404).json({ error: "College not found" });
    }
  } catch (error) {
    console.error("Error updating college:", error);
    res.status(500).json({ error: "Failed to update college" });
  }
});

// DELETE college by city and college_id
app.delete("/api/colleges/:cityName/:collegeId", async (req, res) => {
  try {
    const db = client.db(dbName);
    const result = await db.collection("colleges").deleteOne({
      city: req.params.cityName.toLowerCase(),
      college_id: req.params.collegeId.toLowerCase()
    });
    if (result.deletedCount > 0) {
      res.json({ message: "College deleted" });
    } else {
      res.status(404).json({ error: "College not found" });
    }
  } catch (error) {
    console.error("Error deleting college:", error);
    res.status(500).json({ error: "Failed to delete college" });
  }
});

// POST route to add a new review for a specific flat
// POST route to add a new review for a specific flat
app.post("/api/reviews/:cityName/:collegeName/flats/:flatId", async (req, res) => {
  try {
    const db = client.db(dbName);
    const cityName    = req.params.cityName.toLowerCase();
    const collegeName = req.params.collegeName.toLowerCase();
    const flatId      = req.params.flatId;
    const { reviewText, rating } = req.body;
    console.log("Looking for flatId:", flatId);
    
    // validate
    if (!reviewText || rating === undefined) {
      return res.status(400).json({ error: "Review text and rating are required" });
    }
    
    // fetch the college doc
    const college = await db.collection("colleges").findOne({
      city:      cityName,
      college_id: collegeName
    });
    if (!college) {
      return res.status(404).json({ error: "College not found" });
    }
    
    console.log("All flat IDs in college:", college.flats.map(f => f.id));
    // find the flat
    const flatIndex = college.flats.findIndex(f => f.id === flatId);
    if (flatIndex === -1) {
      return res.status(404).json({ error: "Flat not found" });
    }

    // build the review
    const review = {
      id:      new ObjectId(),
      user:    "John Doe",
      date:    new Date(),
      rating,
      comment: reviewText
    };

    // mutate in JS
    college.flats[flatIndex].details.reviews.push(review);
    college.flats[flatIndex].reviews += 1;

    // write back the updated flats array
    await db.collection("colleges").updateOne(
      { city: cityName, college_id: collegeName },
      { $set: { flats: college.flats } }
    );

    return res.status(201).json({ message: "Review submitted successfully" });
  } catch (error) {
    console.error("Error submitting review:", error);
    return res.status(500).json({ error: "Failed to submit review" });
  }
});

// Start the server and connect to MongoDB
connectToDatabase().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

