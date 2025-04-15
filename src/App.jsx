import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import LandingLayout from "./pages/landingPage/LandingLayout";
import HeroSection from "./pages/landingPage/HeroSection";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} /> */}
        </Route>
        <Route path="*" element={<div className="p-10">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
