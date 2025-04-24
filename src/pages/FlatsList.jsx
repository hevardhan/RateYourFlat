import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faBuilding,
  faMapPin,
  faSearch,
  faSlidersH,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function FlatsList() {
    const { city, college } = useParams();

    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("rating");
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState("all");
  
    const [collegeName, setCollegeName] = useState("College");
    const [flats, setFlats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log("city:", city, "college:", college);

    // Fetch data from API
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(`http://localhost:5000/api/colleges/${city}/${college}`);
          const data = await res.json();
          console.log("Fetched data:", res);
          setCollegeName(data.name || "College");
          setFlats(data.flats || []);
        } catch (err) {
          console.error(err);
          setError("Failed to load flats. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [city, college]);
  // Filter and sort flats
  const filteredFlats = flats
    .filter(
      (flat) =>
        flat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flat.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flat.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((flat) => {
      if (priceRange === "all") return true;
      if (priceRange === "under-700") return flat.price < 700;
      if (priceRange === "700-900")
        return flat.price >= 700 && flat.price <= 900;
      if (priceRange === "over-900") return flat.price > 900;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <Navbar is_fixed={false} />
      <div className="p-20 space-y-8 px-30">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Flats near {collegeName}
          </h1>
          <p className="text-muted-foreground">
            Browse and compare student accommodations near your college
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search flats..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FontAwesomeIcon
                icon={faSlidersH}
                className="h-4 w-4 text-black"
              />
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-gray-500 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-white">Price Range</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={priceRange === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriceRange("all")}
                className="bg-black text-white border border-white hover:bg-gray-800  hover:text-white"
              >
                All Prices
              </Button>
              <Button
                variant={priceRange === "under-700" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriceRange("under-700")}
                className="bg-black text-white border border-white hover:bg-gray-800 hover:text-white"
              >
                Under £700
              </Button>
              <Button
                variant={priceRange === "700-900" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriceRange("700-900")}
                className="bg-black text-white border border-white hover:bg-gray-800  hover:text-white"
              >
                £700 - £900
              </Button>
              <Button
                variant={priceRange === "over-900" ? "default" : "outline"}
                size="sm"
                onClick={() => setPriceRange("over-900")}
                className="bg-black text-white border border-white hover:bg-gray-800  hover:text-white"
              >
                Over £900
              </Button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFlats.map((flat) => (
            <Link key={flat.id} to={`/${city}/${college}/flats/${flat.id}`}>
              <Card className="overflow-hidden h-full transition-colors hover:bg-muted/50">
                <div className="aspect-video relative bg-muted">
                  <div className="absolute top-2 right-2 bg-background rounded-md px-2 py-1 text-sm font-medium">
                    £{flat.price}/mo
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">{flat.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <FontAwesomeIcon
                      icon={faMapPin}
                      className="h-3.5 w-3.5 mr-1"
                    />
                    {flat.address}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-2">
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon icon={faBed} className="h-4 w-4 mr-1" />
                    <span className="mr-3">
                      {flat.bedrooms}{" "}
                      {flat.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                    </span>
                    <FontAwesomeIcon icon={faBath} className="h-4 w-4 mr-1" />
                    <span>
                      {flat.bathrooms}{" "}
                      {flat.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {flat.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1"
                    />
                    <span className="text-sm font-medium">{flat.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">
                      ({flat.reviews})
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {filteredFlats.length === 0 && (
          <div className="text-center py-12">
            <FontAwesomeIcon
              icon={faBuilding}
              className="h-12 w-12 mx-auto text-muted-foreground mb-4"
            />
            <h3 className="text-xl font-bold mb-2">No flats found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find more results
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
