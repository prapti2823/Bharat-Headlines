import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Page from './Pages/Page';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page category="all" />} />
          <Route path="/business" element={<Page category="business" />} />
          <Route path="/entertainment" element={<Page category="entertainment" />} />
          <Route path="/technology" element={<Page category="technology" />} />
          <Route path="/sports" element={<Page category="sports" />} />
          <Route path="/science" element={<Page category="science" />} />
          <Route path="/health" element={<Page category="health" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
