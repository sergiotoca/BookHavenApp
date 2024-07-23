import React, { useContext } from 'react'
import { Hero } from '../Components/Hero/Hero'
import TrendingBooks from '../Components/TrendingBooks/TrendingBooks'
import { useGlobalContext } from '../Context/context';

export const Shop = () => {
  const { showTrending } = useGlobalContext();
  return (
    <div>
        <Hero/>
        {showTrending && <TrendingBooks/>}
    </div>
  )
}
