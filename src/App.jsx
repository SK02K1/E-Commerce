import { Route, Routes } from 'react-router-dom';
import { Navbar, PrivateRoute, Wrapper } from './components';
import { Cart, Home, Login, Products } from './pages';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
