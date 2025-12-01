import Header from "./components/header/header-component";
import Login from "./pages/login/login-page";
import SignUp from "./pages/signup/signup-component";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
