import "./App.scss";
import {
  Home,
  Login,
  UserSignup,
  WorkerSignup,
  Howitworks,
  UserProfile,
  WorkerProfile,
  WorkerDetails,
  JobDetails,
} from "./content";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./containers/layout";
import UserLayout from "./containers/layout/UserProfile";
import WorkerLayout from "./containers/layout/WorkerProfile";
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies();
  console.log("cookies coming from the app", typeof cookies.user_login_cookies);
  const userLoginCookies = cookies.user_login_cookies;
 

  return (
    <main className="App">
      {userLoginCookies !== undefined && (
        <>
          <Routes>
            <Route element={<UserLayout />}>
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/workerDetails/:id" element={<WorkerDetails />} />
              <Route path="*" element={<Navigate to="/userprofile" />} />
            </Route>
            <Route element={<WorkerLayout />}>
              <Route path="/workerprofile" element={<WorkerProfile />} />
              <Route path="/jobdetails" element={<JobDetails />} />
              <Route path="*" element={<Navigate to="/workerprofile" />} />
            </Route>
          </Routes>
        </>
      )}
      {userLoginCookies === undefined && (
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<Howitworks />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/user-signup" element={<UserSignup />} />
            <Route path="/worker-signup" element={<WorkerSignup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
