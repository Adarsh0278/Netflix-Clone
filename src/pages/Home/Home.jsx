import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Images from '../../components/constant/Image'

function Home() {
  return (
    <div className="relative min-h-screen  text-white">
      {/* Navbar fixed on top */}
      <Navbar className="" />

      {/* Hero Section */}
      <div className=" h-screen">
        <img
          src={Images.hero_banner}
          alt="hero banner"
          className="absolute inset-0 z-[-99] w-full h-full object-cover"
        />
        </div>
    </div>
  )
}

export default Home
