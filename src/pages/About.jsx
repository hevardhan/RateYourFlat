import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faMapPin, faStar, faUsers } from "@fortawesome/free-solid-svg-icons"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const About = () => {
  return (
    <div>
        <Navbar is_fixed={false} />
    <div className="container py-12 md:py-24 space-y-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Rate My Flat</h1>
        <p className="text-muted-foreground md:text-xl/relaxed">
          Helping students find the perfect accommodation
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <p>
        Rate My Flat was created with a simple mission: to help students find and rate flats near their colleges. We understand that finding the right accommodation is a crucial part of the student experience, and we want to make this process as smooth and informed as possible.
        </p>
        <p>
        Our platform allows students to browse through flats near their colleges, view detailed information about each property, read reviews from other students, and share their own experiences. By creating a community of students helping students, we aim to improve accommodation standards and ensure everyone finds a place they can call home during their studies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border">
            <FontAwesomeIcon icon={faBuilding} className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">1000+</h3>
          <p className="text-muted-foreground">Flats Listed</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border">
            <FontAwesomeIcon icon={faMapPin} className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">50+</h3>
          <p className="text-muted-foreground">Cities Covered</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border">
            <FontAwesomeIcon icon={faStar} className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">5000+</h3>
          <p className="text-muted-foreground">Student Reviews</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border">
            <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">10,000+</h3>
          <p className="text-muted-foreground">Active Users</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold tracking-tighter">Our Values</h2>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Transparency</h3>
            <p>We believe in honest, unfiltered reviews that give students the real picture of what to expect.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Community</h3>
            <p>
              We foster a community where students help each other make informed decisions about their accommodation.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Accessibility</h3>
            <p>
              We strive to make information about student accommodation accessible to everyone, regardless of
              background.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto border-t pt-8">
        <h2 className="text-2xl font-bold tracking-tighter mb-4">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="aspect-square rounded-full bg-muted overflow-hidden border"></div>
            <h3 className="font-bold text-center">Hevardhan S</h3>
            <p className="text-sm text-muted-foreground text-center">Frontend Developer</p>
          </div>
          <div className="space-y-2">
            <div className="aspect-square rounded-full bg-muted overflow-hidden border"></div>
            <h3 className="font-bold text-center">Mannan Singh Khanka</h3>
            <p className="text-sm text-muted-foreground text-center">Backend Developer</p>
          </div>
          <div className="space-y-2">
            <div className="aspect-square rounded-full bg-muted overflow-hidden border "></div>
            <h3 className="font-bold text-center">Srinivas Motepalli</h3>
            <p className="text-sm text-muted-foreground text-center">Cloud and Database Management</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default About