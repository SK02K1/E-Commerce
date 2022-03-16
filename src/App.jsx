import { Route, Routes } from 'react-router-dom';
import { Navbar, Wrapper } from './components/index';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
