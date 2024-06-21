import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpperNavbar from './Components/UpperNavbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <UpperNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home category="all" />} />
          <Route path="/business" element={<Home category="business" />} />
          <Route path="/entertainment" element={<Home category="entertainment" />} />
          <Route path="/technology" element={<Home category="technology" />} />
          <Route path="/sports" element={<Home category="sports" />} />
          <Route path="/science" element={<Home category="science" />} />
          <Route path="/health" element={<Home category="health" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;