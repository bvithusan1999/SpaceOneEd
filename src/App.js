// import logo from './logo.svg';
import "./App.css";
import { useSelector } from "react-redux";

import Card from "./Components/Card/Card";

import Hero from "./Components/Hero/Hero";
import LoginCard from "./Components/LoginCard/LoginCard";
import Navbar from "./Components/Navbar/Navbar";
// import Hero from './Components/Hero/Hero';
import Navigation from "./Components/Navigation/Navigation";
import StudentAuthPage from "./Pages/StudentAuthPage/StudentAuthPage";
import ClassViewPage from "./Pages/ClassViewPage/ClassViewPage";
// import Features from './Components/Features/Features';
import LandingPage from "./Pages/LandingPage/LandingPage";
import InstructorAuthPage from "./Pages/InstructorAuthPage/InstructorAuthPage";
// import Card from './Components/Card/Card';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ExploreClassesPage from "./Pages/ExploreClassesPage/ExploreClassesPage";
import StudentHomePage from "./Pages/StudentHomePage/StudentHomePage";
import AuthPage from "./Pages/StudentAuthPage/StudentAuthPage";
import InstructorHomePage from "./Pages/InstructorHomePage/InstructorHomePage";
import { jwtDecode } from "jwt-decode";
import MyClassSpacePage from "./Pages/MyClassSpacePage/MyClassSpacePage";
import MyClassViewPage from "./Pages/MyClassViewPage/MyClassViewPage";
import VideoRenderPage from "./Pages/VideoRenderPage/VideoRenderPage";
function App() {
  const user = useSelector((state) => state.authReducer.authData);

  // if (data && data.access_token) {
  //     try {
  //         user = jwtDecode(data.access_token);
  //     } catch (error) {
  //         console.error("Failed to decode JWT:", error);
  //         user = 0; // or any other default/fallback value
  //     }
  // } else {
  //     user = 0; // Handle cases where there is no token or data
  // }

  // console.log(user);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              user.role === "STUDENT" ? (
                <Navigate to={"/student-home"} />
              ) : (
                <Navigate to={"/instructor-home"} />
              )
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/home" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            user ? (
              user.role === "STUDENT" ? (
                <Navigate to={"/student-home"} />
              ) : (
                <Navigate to={"/instructor-home"} />
              )
            ) : (
              <StudentAuthPage />
            )
          }
        />
        <Route path="/class-view-page/:classId" element={<ClassViewPage />} />

        <Route path="/my-class-page" element={<MyClassViewPage />} />
        <Route path="/explore-classes" element={<ExploreClassesPage />} />
        <Route path="/teachon-spaceed" element={<InstructorAuthPage />} />
        <Route path="/instructor-signup" element={<InstructorAuthPage />} />

        <Route path="/instructor-signup" element={<InstructorAuthPage />} />
        <Route
          path="/student-home"
          element={user ? <StudentHomePage /> : <Navigate to="/home" />}
        />

        <Route path="/video-render-page" element={<VideoRenderPage />} />

        <Route
          path="/instructor-home"
          element={user ? <InstructorHomePage /> : <Navigate to="/home" />}
        />
        <Route
          path="/my-class-space-page/:classSpaceId"
          element={user ? <MyClassSpacePage /> : <Navigate to="/home" />}
        />
      </Routes>
      {/* <MyClassSpacePage /> */}
      {/* <StudentHomePage/> */}
      {/* <InstructorHomePage/> */}
      {/* <InstructorAuthPage/> */}

      {/* <ExploreClassesPage/> */}
      {/* <LoginCard/> */}
      {/* <Navigation /> */}
      {/* <Navbar/> */}

      {/* <ClassViewPage />  */}

      {/* <LandingPage/> */}
      {/* <AuthPage/> */}
    </div>
  );
}

export default App;
