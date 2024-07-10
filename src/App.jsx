import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Login from "./pages/login/Login";
import RegistrationForm from "./pages/register/Register";

import ProfilePage from "./pages/profile/ProfilePage";

import EditProfile from "./pages/editProfile/EditProfile";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          {/* <Route path="/edit" element={<EditProfile />} /> */}
          <Route path="/edit/:id" element={<EditProfile />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
