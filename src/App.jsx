import Login from "./Login";
import HomePage from "./HomePage";
import ThankYou from "./Thanku";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Admin-login" element={<Login />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
export default App;
