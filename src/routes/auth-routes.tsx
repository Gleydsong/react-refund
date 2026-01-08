import { Routes, Route } from "react-router";
import { AuthLayout } from "../components/AuthLayout";

import { SingIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SingIn />} />
      </Route>
    </Routes>
  );
}
