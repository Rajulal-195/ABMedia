import React from 'react'
import Destinations from '../components/Destinations'
import Packages from '../components/Packages'
import AdventureCarousel from '../components/AdventureCarousel'
import Advantages from '../components/Advantages'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <div>

        <AdventureCarousel />
        <Destinations />
        <Advantages />
        <Packages />
        <Testimonials/>
      </div>
    </>
  )
}
