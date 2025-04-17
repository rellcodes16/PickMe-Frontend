import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import LandingLayout from "./pages/landingPage/LandingLayout";
import LandingPage from "./pages/landingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import AppLayout from "./app/AppUI/AppLayout";
import { ModeProvider } from "./UI/ColorModeToggle";

function App() {
  return (
    <ModeProvider>
        <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/app" />
        </Route>
        <Route path="*" element={<div className="p-10">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
    </ModeProvider>
    
  );
}

export default App;
