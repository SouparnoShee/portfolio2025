import React, { useEffect, useState } from 'react'
import Home from './screens/home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Work from './screens/works/Work'
import WorkInfo from './screens/workinfo/WorkInfo'
import Contact from './screens/contact/Contact'
import About from './screens/about/About'
import HireMe from './screens/hireme/HireMe'
import Loader from './components/loader/Loader'
import QuickMessage from './components/quickmessage/QuickMessage'


const App = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])
  return (
    <>
      {
        loader ? <Loader /> :
          <div>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/works' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/workinfo/:work' element={<WorkInfo />} />
              <Route path='/about' element={<About />} />
              <Route path='/hireme' element={<HireMe />} />
            </Routes>
            <Footer />
            <QuickMessage />
          </div>
      }
    </>
  )
}

export default App
