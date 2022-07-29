import React from 'react'
import { Routes, Route} from 'react-router-dom';

import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />

        <div>
            <Routes>
                <Route path='/marvel' element={ <MarvelScreen /> } />
                <Route path='/heroe/:heroeId' element={ <HeroesScreen /> } />
                <Route path='/dc' element={ <DcScreen /> } />
                <Route path="*" element={<DcScreen />} />
            </Routes>
        </div>
    </>
  )
}
