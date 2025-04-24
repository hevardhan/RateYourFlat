import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faBuilding} from "@fortawesome/free-solid-svg-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle,CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const College = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [colleges, setColleges] = useState([]);
  const [selectedTab, setSelectedTab] = useState("cities");

  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cities") // make sure the server is running
      .then(res => setCities(res.data))
      .catch(err => console.error("Error loading cities:", err));
  }, []);
  
  
  useEffect(() => {
    if (selectedCity) {
      // Fetch colleges based on selected city
      const city = cities.find((c) => c._id === selectedCity);
      if (city) {
        console.log("City name:", city.name.toLowerCase())
        axios
          .get(`http://localhost:5000/api/colleges/${city}`)
          .then((res) => setColleges(res.data))
          .catch((err) => console.error("Error loading colleges:", err));
      }
    }
  }, [selectedCity, cities]);


  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar is_fixed={false} />

      <div className="max-w-3xl mx-auto text-center space-y-4 pt-20">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Find Colleges & Flats
        </h1>
        <p className="text-muted-foreground md:text-xl/relaxed">
          Browse through cities and colleges to find the perfect accommodation
        </p>
      </div>

      <div className="max-w-xl mx-auto mt-10">
        <div className="relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search cities or colleges..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="max-w-4xl mx-auto py-10 min-h-full"
      >
        <TabsList className="grid w-full grid-cols-2 bg-gray-300">
          <TabsTrigger value="cities">Cities</TabsTrigger>
          <TabsTrigger value="colleges">Colleges</TabsTrigger>
        </TabsList>

        <TabsContent value="cities" className="min-h-[500px]">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {filteredCities.map((city) => (
              <Card key={city.id} className="overflow-hidden">
                <CardHeader className="px-4">
                  <CardTitle className="text-xl">{city.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedCity(city.id);
                      console.log("Selected city:", city.name);
                      axios
                      .get(`http://localhost:5000/api/colleges/${city.name}`)
                      .then((res) => setColleges(res.data))
                      .catch((err) => console.error("Error loading colleges:", err));
                      console.log(colleges)
                      setSelectedTab("colleges");
                    }}
                  >
                    View Colleges
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="colleges" className="min-h-[500px]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              Colleges in{" "}
              {cities.find((city) => city.id === selectedCity)?.name ??
                "None selected"}
            </h2>

            <Button
              variant="outline"
              className="text-black"
              size="sm"
              onClick={() => setSelectedTab("cities")}
            >
              Change City
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
{colleges.length > 0 ? (
              colleges.map((college) => (
                <Card key={college._id} className="overflow-hidden transition-colors hover:bg-muted/50">
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl">{college.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faBuilding} className="h-4 w-4" />
                        <span>{college.flats?.length ?? 0} flats available</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 px-4 pb-4">
                  <Button
  variant="outline"
  className="w-full"
  onClick={() => {
    const cityName = cities.find((city) => city.id === selectedCity)?.name || "";
    window.location.href = `/${encodeURIComponent(cityName)}/${encodeURIComponent(college.college_id)}`;
  }}
>
  View Flats
</Button>

                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No colleges found for this city.</p>
            )}
          </div>
          {/* Render colleges based on selectedCity */}
        </TabsContent>
      </Tabs>

      <Footer />
    </div>
  );
};

export default College;
