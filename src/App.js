import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shows from './pages/Shows';
import ShowDetails from './pages/ShowDetails';
import TicketForm from './components/TicketForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shows />} />
        <Route path="/shows/:id" element={<ShowDetails />} />
        <Route path="/booking/:id" element={<TicketForm />} />
      </Routes>
    </Router>
  );
}

export default App;
