import React, { useState, useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Authentication from "./pages/authentication";
import Home from "./pages/home/home";
import { ProtectedRoute } from "./components/protectRoute";
import ChatBot from "./components/creoBot/CreoBot";
import { UserProvider } from "./components/global/context";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem("isAuthenticated") === "true");
  const [userInfo, setUserInfo] = useState(() => JSON.parse(sessionStorage.getItem("userInfo")) || {});
  const [selectedTitle, setSelectedTitle] = useState("Home");

  const [theme, colorMode] = useMode();

  useEffect(() => {
    sessionStorage.setItem("isAuthenticated", isAuthenticated);
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("selectedTitle", selectedTitle);
  }, [isAuthenticated, userInfo, selectedTitle]);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUserInfo(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserInfo({});
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userInfo");
  };

  return (
    <UserProvider initialUserInfo={userInfo}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div className="app" style={{ display: "flex", height: "100vh" }}>
              <main className="content" style={{ flex: 1, overflow: "auto" }}>
                {isAuthenticated && <Topbar onLogout={handleLogout} setSelectedTitle={setSelectedTitle} />}
                {isAuthenticated && <ChatBot />}
                <Routes>
                  {isAuthenticated ? (
                    <>
                      <Route path="/" element={<Home />} />
                    </>
                  ) : (
                    <Route path="*" element={<Navigate to="/" />} />
                  )}
                  <Route
                    path="/"
                    element={
                      isAuthenticated ? (
                        <Home />
                      ) : (
                        <Authentication onLogin={handleLogin} setUserInfo={setUserInfo} />
                      )
                    }
                  />
                </Routes>
              </main>
            </div>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserProvider>
  );
}

export default App;
