import './App.scss';
import { Header , Footer } from './containers'
import { Home } from './content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <main className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;