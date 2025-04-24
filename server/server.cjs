const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());

const uri = "mongodb+srv://hevardhan:heva2004@rf-demo.nbrkrqv.mongodb.net/?retryWrites=true&w=majority&appName=rf-demo";
const client = new MongoClient(uri);
const dbName = "rate_my_flat";

app.get("/api/cities", async (req, res) => {
  try {
    await client.connect();
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
    await client.connect();
    const db = client.db(dbName);
    const cityName = req.params.cityName.toLowerCase();
    const colleges = await db.collection("colleges").find({ city: cityName }).toArray();
    res.json(colleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);
    res.status(500).json({ error: "Failed to fetch colleges" });
  }
});

// GET colleges for a specific city
app.get("/api/colleges/:cityName/:collegeName", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const cityName = req.params.cityName.toLowerCase();
    const collegeName = req.params.collegeName.toLowerCase();
    const colleges = await db.collection("colleges").find({ city: cityName }).toArray();
    // Modify the query to filter by both city and college name
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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
