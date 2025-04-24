import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import College from './pages/College'
import FlatDetailPage from './pages/FlatDetailPage'
import FlatsList from './pages/FlatsList'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HousingCRUD from './pages/HousingCrud'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:city/:college" element={<FlatsList />} />
        <Route path="/:city/:college/flats/:flatid" element={<FlatDetailPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crud" element={<HousingCRUD />} />
        <Route path="/find" element={<College />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App