import { Navbar, Wrapper } from './components/index';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
