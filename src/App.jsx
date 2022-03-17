import { Route, Routes } from 'react-router-dom';
import { Navbar, Wrapper } from './components';
import { Home, Products } from './pages';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
