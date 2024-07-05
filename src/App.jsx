import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
