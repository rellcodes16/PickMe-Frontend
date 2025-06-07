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
import Voting from "./app/features/voting/Voting";
import Invitation from "./app/features/invitation/Invitation";
import Modal from "./app/appUI/AppModal";
import AdminLayout from "./app/features/admin/adminUI/AdminLayout";
import ElectionList from "./app/features/admin/adminPages/elections/ElectionList";
import AdminList from "./app/features/admin/adminPages/admins/AdminList";

function App() {
  return (
    <ModeProvider>
      <Modal>
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
          <Route path="/app/votings" element={<Voting />} />
          <Route path="/app/invitations" element={<Invitation />} />
        </Route>
        <Route path="/app/adminanalytics" element={<AdminLayout />}>
          <Route index element={<ElectionList />} />      
          <Route path="election" element={<ElectionList />} />
          <Route path="admins" element={<AdminList />} />
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
    </Modal>
    </ModeProvider>
    
  );
}

export default App;
