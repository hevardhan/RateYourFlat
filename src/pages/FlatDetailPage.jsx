"use client"

import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faBath, faBuilding, faCalendar, faChevronLeft, faMapPin, faPhone, faStar, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/Navbar"
import axios from "axios";


export default function FlatDetailPage() {
  const { city, college, flatid } = useParams() // Get dynamic params from URL
  const [flat, setFlat] = useState(null) // Initialize state to store flat data
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  console.log("city:", city, "college:", college, "flatid:", flatid)

  // Fetch the flat data when the component mounts
  useEffect(() => {
    const fetchFlatData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/colleges/${city}/${college}/flats/${flatid}`) // Adjust the endpoint to match your API
        setFlat(response.data) // Set the fetched flat data
      } catch (error) {
        console.error("Error fetching flat data:", error)
      }
    }

    fetchFlatData()
  }, [city, college, flatid]) // Re-fetch data when params change

  const handleSubmitReview = (e) => {
    e.preventDefault()
    // In a real app, you would submit the review to an API
    alert("Review submitted successfully!")
    setReviewText("")
    setRating(0)
  }

  const renderStars = (value) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`h-5 w-5 ${i < value ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
        />
      ))
  }

  const renderRatingStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`h-6 w-6 cursor-pointer ${
            i < (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
          }`}
          onClick={() => setRating(i + 1)}
          onMouseEnter={() => setHoveredRating(i + 1)}
          onMouseLeave={() => setHoveredRating(0)}
        />
      ))
  }

  if (!flat) return <div>Loading...</div> // Show a loading state until data is fetched

  return (
    <div>
      <Navbar is_fixed={false} />
    <div className="py-12 space-y-8 mx-30">
      <div className="flex items-center">
        <Link to={`/${city}/${college}`} className="flex items-center text-muted-foreground hover:text-foreground">
          <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4 mr-1" />
          Back to Flats
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="aspect-video bg-muted rounded-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-background rounded-md px-3 py-1.5 font-medium">
                £{flat.price}/mo
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold">{flat.name}</h1>
                  <div className="flex items-center mt-1 text-muted-foreground">
                    <FontAwesomeIcon icon={faMapPin} className="h-4 w-4 mr-1" />
                    {flat.address}
                  </div>
                </div>
                <div className="flex items-center">
                  {renderStars(flat.rating)}
                  <span className="ml-2 font-medium">{flat.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faBed} className="h-5 w-5 mr-1.5" />
                  <span>
                    {flat.bedrooms} {flat.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                  </span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faBath} className="h-5 w-5 mr-1.5" />
                  <span>
                    {flat.bathrooms} {flat.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                  </span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faBuilding} className="h-5 w-5 mr-1.5" />
                  <span>Student Accommodation</span>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="min-h-[800px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6 ">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">About this flat</h2>
                <p>{flat.details.description}</p>

                <div className="aspect-video bg-muted rounded-lg mt-4">
                  {/* Map would go here */}
                  <div className="h-full flex items-center justify-center text-muted-foreground">
                    <FontAwesomeIcon icon={faMapPin} className="h-8 w-8 mr-2" />
                    <span>Map Location</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="amenities" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Amenities</h2>
                <div className="grid grid-cols-2 gap-2">
                  {flat.details.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Student Reviews</h2>

                <div className="space-y-4">
                  {flat.details.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                              <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                              <CardTitle className="text-base">{review.user}</CardTitle>
                              <CardDescription className="flex items-center">
                                <FontAwesomeIcon icon={faCalendar} className="h-3 w-3 mr-1" />
                                {review.date}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center">{renderStars(review.rating)}</div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg">Write a Review</CardTitle>
                    <CardDescription>Share your experience with other students</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="flex items-center mb-4">{renderRatingStars()}</div>
                    <Textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Write your review here..."
                    />
                    <Button onClick={handleSubmitReview} className="mt-4">Submit Review</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Contact the Landlord</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2" />
                  <span>{flat.details.owner.phone}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-2" />
                  <span>{flat.details.owner.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
}
