import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Benefits from "./pages/Benefits";
import Engagement from "./pages/Engagement";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <main key={location.pathname} className="animate-page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AnimatedRoutes />
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
