import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import LandingLayout from "./pages/landingPage/LandingLayout";
import LandingPage from "./pages/landingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import AppLayout from "./app/AppUI/AppLayout";
import { ModeProvider } from "./UI/ColorModeToggle";
import { Toaster } from "react-hot-toast";
import Organization from "./app/features/organization/Organization";
import ProfileSettings from "./app/features/profileSetting/ProfileSettings";
import OrganizationDetails from "./app/features/organization/OrganizationDetails";

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
          <Route path="/app/organizations" element={<Organization />} />
          <Route path="/organization/:id" element={<OrganizationDetails />} />
          <Route path="/app/profilesettings" element={<ProfileSettings />} />
        </Route>
        <Route path="*" element={<div className="p-10">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>

    <Toaster
      position="top-center" 
      gutter={12} 
      containerStyle={{ margin: '8px' }} 
      toastOptions={{
        success: {duration: 3000},
        error: { duration: 5000 },
        style: { 
          fontSize: '16px',
          maxWidth: '500px', 
          padding: '16px 24px', 
          backgroundColor: 'white',
          color: 'gray 0.3'
        },
      }}
    />
    </ModeProvider>
    
  );
}

export default App;
