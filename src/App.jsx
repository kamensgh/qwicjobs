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
  EditWorkerProfile,
  EditUserProfile,
  PostJob,
} from "./content";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./containers/layout";
import UserLayout from "./containers/layout/UserProfile";
import WorkerLayout from "./containers/layout/WorkerProfile";

function App() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log("user.userTypeId", user);

  return (
    <main className="App">
      {user && (
        <>
          <Routes>
            {/* {user.userTypeId === 5 ? (
              <Route element={<WorkerLayout />}>
                <Route path="/workerprofile" element={<WorkerProfile />} />
                <Route path="/jobdetails" element={<JobDetails />} />
                <Route path="/editdetails" element={<EditWorkerProfile />} />
                <Route path="*" element={<Navigate to="/workerprofile" />} />
              </Route>
            ) : (
              <Route element={<UserLayout />}>
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/postjob" element={<PostJob />} />
                <Route path="/workerDetails/:id" element={<WorkerDetails />} />
                <Route path="*" element={<Navigate to="/userprofile" />} />
              </Route>
            )} */}
          </Routes>
        </>
      )}
      {!user && (
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<Howitworks />} />
            </Route>
            <Route element={<WorkerLayout />}>
              <Route path="/editdetails" element={<EditWorkerProfile />} />
              <Route path="*" element={<Navigate to="/workerprofile" />} />
            </Route>
            {/* <Route element={<UserLayout />}> 
              <Route path="/postjob" element={<PostJob />} />
              <Route path="/editdetails" element={<EditUserProfile />} />
              <Route path="*" element={<Navigate to="/workerprofile" />} />
            </Route> */}
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
