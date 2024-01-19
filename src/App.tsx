import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import About from "./_root/pages/About";
import Home from "./_root/pages/Home";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";

import "./global.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      {/* Auth */}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Pages */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
