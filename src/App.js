import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import MyCalculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<MyCalculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
