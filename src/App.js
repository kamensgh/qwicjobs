import './App.scss';
import { Header, Footer } from './containers';
import { Home, Login } from './content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        {/* {window.location.pathname !== '/login' && <Header />} */}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* {window.location.pathname !== '/login' && <Footer />}  */}
      </BrowserRouter>
    </main>
  );
}

export default App;
