import { Route, Routes } from 'react-router-dom';
import { Navbar, Wrapper } from './components';
import { Home, Login, Products } from './pages';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
