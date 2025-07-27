import Login from "./Login";
import HomePage from "./HomePage";
import ThankYou from "./Thanku";
import RequireAuth from "./ADMIN/ProtectedRoute/RequireAuth";
import AdminDashboard from "./ADMIN/Dashboard";
import { Routes, Route } from "react-router-dom";
import MultiImageUpload from "./ADMIN/Images/SingleImageUpload";
import UpdateProfile from "./ADMIN/UpdateProfile";
import ContactedUsers from "./ContactUser";
import UserProfile from "./ADMIN/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          <RequireAuth>
            <AdminDashboard />
          </RequireAuth>
        }
      >
        {/* Nested route: goes into <Outlet /> inside AdminDashboard */}
        <Route path="profile" element={<UserProfile />} />
        <Route path="upload" element={<MultiImageUpload />} />
        <Route path="update-profile" element={<UpdateProfile />} />
        <Route path="contact" element={<ContactedUsers />} />
      </Route>
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
export default App;
