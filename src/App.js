import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shows from './pages/Shows';
import ShowDetails from './pages/ShowDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shows />} />
        <Route path="/shows/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
