import {BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Hero   from './Hero' 
import Product  from './Product' 
import Saidbar  from './Saidbar' 
import { useState } from 'react'
function App() {
  const[selectedCategory,setSelectedCategory]=useState("All Categories")
  const[search,setSearch]=useState("")
  return (
    <>
    <BrowserRouter>
    <Navbar search={search} setSearch={setSearch}/>
    <main>
    <Routes>
      <Route path='/' element={
        <>
        <Hero/>
        <Product/>
        </>
      }/>
      <Route path='/products' element={
        <div className='app  products-page'>
        <Saidbar selectedCategory={selectedCategory} onSelectedCategory={setSelectedCategory}/>
        <div className='page'>
        <Product  selectedCategory={selectedCategory} search={search} />
        </div>
        </div>
      }/>
    </Routes>
    </main>
    </BrowserRouter>
    </>
  )
}

export default App
