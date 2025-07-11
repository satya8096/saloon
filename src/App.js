import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import BookAppointment from "./Pages/BookAppointment";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import NotFound from "./Components/Error404";
import FloatingButtons from "./Components/FloatingButtons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-an-appointment" element={<BookAppointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
