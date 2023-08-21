import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Gallery from "./pages/gallery/Gallery";



function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Gallery/>}/>
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/blog" element={ <Blog/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App