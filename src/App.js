import './App.scss';
import { Home, Login , Signup, Howitworks , UserProfile } from './content';
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
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  

  
  );
}

export default App;
