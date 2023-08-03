import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardFlag from './components/CardFlag'
import ScoreCard from './components/ScoreCard'


function App() {

  return (

    <div className='app'>
      {/* <Card/> */}
      <CardFlag/>
      {/* <ScoreCard/> */}
    </div>
  )
}

export default App
