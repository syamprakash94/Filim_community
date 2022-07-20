import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home";
import Adminhome from "./pages/Adminhome";
import Adminlogin from "./components/Adminlogin/Adminlogin";
import Adminproff from "./pages/Adminproff"
import Profile from "./pages/Profile";

function App() {

  const user = localStorage.getItem("userInfo")
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={ <Home /> }></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/adminhome" element={<Adminhome/>}></Route>
        <Route path="/admin" element={<Adminlogin/>}></Route>
        <Route path="/adminproff" element={<Adminproff/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
