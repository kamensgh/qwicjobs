import './App.scss';
import { Home, Login , UserSignup, WorkerSignup, Howitworks , UserProfile } from './content';
import { Route, Routes } from 'react-router-dom';
import Layout from './containers/layout'
import UserLayout from './containers/layout/UserProfile'
import WorkerLayout from './containers/layout/WorkerProfile'



function App() {
  
  return (

 
    <main className="App">
     <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<Howitworks />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="/userprofile" element={<UserProfile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/worker-signup" element={<WorkerSignup />} />
      </Routes>
    </main>
  

  
  );
}

export default App;
