import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home";

function App() {

  const user = localStorage.getItem("userInfo")
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
