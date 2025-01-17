import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Fornecedores from './pages/Fornecedores';
import SubgrupoPage from './pages/SubgrupoPage';
import GrupoPage from './pages/GrupoPage';
import Produtos from './pages/Produtos';
import LancaNFe from './pages/LancaNFe';
import MovimentacaoProdutos from './pages/MovimentacaoProdutos';
import Layout from './components/Layout'; // Importar o novo componente Layout
import { useAuth } from './context/AuthContext'; // Importe o hook useAuth
import Veiculos from './pages/Veiculos';

function App() {
  const { isAuthenticated } = useAuth(); // Use o contexto de autenticação

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/fornecedores" element={isAuthenticated ? <Fornecedores /> : <Navigate to="/login" />} />
          <Route path="/grupoproduto" element={isAuthenticated ? <GrupoPage /> : <Navigate to="/login" />} />
          <Route path="/subgrupoproduto" element={isAuthenticated ? <SubgrupoPage /> : <Navigate to="/login" />} />
          <Route path="/produtos" element={isAuthenticated ? <Produtos /> : <Navigate to="/login" />} />
          <Route path="/veiculos" element={isAuthenticated ? <Veiculos /> : <Navigate to="/login" />} />
          <Route path="/notafiscal" element={isAuthenticated ? <LancaNFe /> : <Navigate to="/login" />} />
          <Route path="/movimentacaoprodutos" element={isAuthenticated ? <MovimentacaoProdutos /> : <Navigate to="/login" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
