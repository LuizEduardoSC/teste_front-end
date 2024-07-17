// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AnimalDetails from './pages/AnimalDetails';
import AnimalList from './pages/AnimalList';
import Login from './pages/Login';
import RegistrarAnimal from './pages/RegistrarAnimal';
import RegistrarUser from './pages/RegistrarUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrar-user" element={<RegistrarUser />} />
        <Route path=" " element={<RegistrarAnimal />} />
        <Route path="/animais" element={<AnimalList />} />
        <Route path="/animal/:id" element={<AnimalDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

