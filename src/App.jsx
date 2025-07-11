import Login from "./Login";
import HomePage from "./HomePage";
import ThankYou from "./Thanku";
import RequireAuth from "./ADMIN/ProtectedRoute/RequireAuth";
import AdminDashboard from "./ADMIN/Dashboard";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<RequireAuth><AdminDashboard/></RequireAuth>}/>
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
export default App;
