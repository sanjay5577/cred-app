import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductShowCase from '../components/ProductShowCase'
import FeelSpecial from '../components/FeelSpecial'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'
import BrandsColab from '../components/BrandsColab'
import WindowPeek from '../components/WindowPeek'


const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <ProductShowCase />
        <FeelSpecial />
        <BrandsColab />
        <CredExperience />
        <div className='non-mobile'>
        < WindowPeek />
        </div>
        
        <CredSecurity />
    </div>
  )
}

export default Homepage