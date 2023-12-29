// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Nav from './components/layout/Nav';

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
            {/* <Route path='/' element={<Home />} />
            <Route path='/clerk' element={<Clerk />} />
            <Route path='/cashier' element={<Cashier />} /> */}
          </Routes>
        </Router>
      </AlertState>
    </div>
  );
}

export default App;
