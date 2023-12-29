// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';

// State - Context
import AlertState from './context/alert/alertState';

// Styles
import './styles/App.scss';

// Utils

// Component
function App() {
  return (
    <div>
      <AlertState>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/clerk' element={<Clerk />} /> */}
            {/* <Route path='/cashier' element={<Cashier />} /> */}
          </Routes>
          <Footer />
        </Router>
      </AlertState>
    </div>
  );
}

export default App;
