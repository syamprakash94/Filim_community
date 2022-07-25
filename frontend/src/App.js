import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home";
import Adminhome from "./pages/Adminhome";
import Adminlogin from "./components/Adminlogin/Adminlogin";
import Adminproff from "./pages/Adminproff";
import Profile from "./pages/Profile";
import Middleuserregister from "./pages/Middleuserregister";
import Middleuserlogin from "./components/Middleuserlogin/Middleuserlogin";
import Editpost from "./pages/Editpost";


function App() {
  const user = localStorage.getItem("userInfo");
  return (
    <BrowserRouter>
      <Routes>
        {/* user routes */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="/editpost/:postId" element={<Editpost />}></Route>
        {/* admin routes*/}
        <Route path="/adminhome" element={<Adminhome />}></Route>
        <Route path="/admin" element={<Adminlogin />}></Route>
        <Route path="/adminproff" element={<Adminproff />}></Route>
        {/* middleuser routes*/}
        <Route path="/middleuser" element={<Middleuserregister />}></Route>
        <Route path="/middleuserlogin" element={<Middleuserlogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
