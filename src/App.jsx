import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Marketplace from './pages/Marketplace';
import BookDetail from './pages/BookDetail';
import Sell from './pages/Sell';
import Subscription from './pages/Subscription';
import NGO from './pages/NGO';
import Donate from './pages/Donate';
import Dashboard from './pages/Dashboard';
import SellerGuide from './pages/SellerGuide';
import FAQs from './pages/FAQs';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/ngo" element={<NGO />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/seller-guide" element={<SellerGuide />} />
              <Route path="/faqs" element={<FAQs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
