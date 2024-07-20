import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DetalhesAnimal from './pages/DetalhesAnimal';
import ListaAnimal from './pages/ListaAnimal';
import Login from './pages/Login';
import RegistrarAnimal from './pages/RegistrarAnimal';
import RegistrarUser from './pages/RegistrarUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar-user" element={<RegistrarUser />} />
        <Route path="/regitrar-animal" element={<RegistrarAnimal />} />
        <Route path="/animais" element={<ListaAnimal />} />
        <Route path="/animal/:id" element={<DetalhesAnimal />} />
      </Routes>
    </Router>
  );
}

export default App;

