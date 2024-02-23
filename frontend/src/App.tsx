import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NextUIProvider } from "@nextui-org/react";

import PrivateRoute from "./utils/PrivateRoute";
import Router from "./routes/Router";

import { Login, Signup } from "@/pages";

function App() {
  const navigate = useNavigate();

return (
    <>
      <NextUIProvider navigate={navigate}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoute />} path="*">
              <Route path="*" element={<Router />} />
            </Route>
          </Routes>
        </AuthProvider>
      </NextUIProvider>
    </>
  );
}

export default App;
