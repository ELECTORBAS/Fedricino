import {Routes, Route} from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText)

import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App