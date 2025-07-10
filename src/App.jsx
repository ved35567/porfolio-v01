import Login from "./Login";
import HomePage from "./HomePage";
import {  Routes, Route} from "react-router-dom";

function App()
{
   return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Admin-login" element={<Login />} />
    </Routes>
  );
}
export default App;
