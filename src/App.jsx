import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Navbar, PrivateRoute, Wrapper } from './components';
import {
  Cart,
  Home,
  Login,
  NotFound,
  Products,
  Profile,
  Signup,
  SingleProduct,
  Wishlist,
} from './pages';

function App() {
  return (
    <div className='App'>
      <Toaster position='bottom-center' />
      <Navbar />
      <Wrapper>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productID' element={<SingleProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />

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
