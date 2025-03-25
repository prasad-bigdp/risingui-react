import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Components from './pages/Components'
import selectedComp from './pages/selectedComp'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='' Component={Home} />
        <Route path='home' Component={Home} />
        <Route path='components' Component={Components}>
        </Route>
       <Route path='components/:id' Component={selectedComp}></Route>
        <Route path='*' Component={NotFound} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
