import { Route, Routes } from 'react-router-dom';
import { Navbar, PrivateRoute, Wrapper } from './components';
import { Cart, Home, Login, Products, Profile } from './pages';
import { Wishlist } from './pages/Wishlist/Wishlist';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />

          {/* Private routes */}
          <Route element={<PrivateRoute />}>
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
