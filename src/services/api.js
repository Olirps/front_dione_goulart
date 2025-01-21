import axios from 'axios';

// Crie uma instância do axios com a URL base
const api = axios.create({
  baseURL: 'http://3.143.233.203:3002/api',
});

// Função para definir o token de autenticação no header
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};


// Recuperar o token do localStorage e definir no Axios
const token = localStorage.getItem('authToken');
setAuthToken(token);

export { api, setAuthToken };

// Funções de autenticação
export const login = (username, password) => {
  return api.post('/auth/login', { username, password });
};

// Funções para gerenciar pessoas
/*export const getPessoas = () => {
  return api.get('/pessoas');
};*/

export const getFornecedores = async (filters = {}) => {
  try {
    const response = await api.get('/fornecedores', { params: filters });
    return response;
  } catch (error) {
    console.error('Erro ao buscar fornecedores:', error);
    throw error; // Repassa o erro para tratamento
  }
};

export const addFornecedor = async (pessoa) => {
  return api.post('/fornecedores', pessoa);
};

export const updateFornecedor = async (id, pessoa) => {
  return api.put(`/fornecedores/${id}`, pessoa);
};

export const getFornecedorById = async (id) => {
  return api.get(`/fornecedores/${id}`);
};

// Funções para gerenciar carros
export const getVeiculos = async (filters = {}) => {
  const response = await api.get('/veiculos', { params: filters });
  return response;
};

export const addVeiculos = async (carro) => {
  return api.post('/veiculos', carro);
};

export const updateVeiculos = async (id, carro) => {
  return api.put(`/veiculos/${id}`, carro);
};

export const getVeiculosById = async (id) => {
  return api.get(`/veiculos/${id}`);
};

// Funções para gerenciar tipo veiculo
export const getTipoVeiculo = async () => {
  return api.get('/tipoveiculo');
};


// Funções para gerenciar vinculo de produtos com veiculos
export const vinculoProdVeiculo = async (carro) => {
  return api.post('/vinculoprodveiculo', carro);
};

export const getVinculosProdutoVeiculo = async () => {
  return api.get('/vinculoprodveiculo-lista');
};

export const obterVinculoPorProdutoId = async (produtoId) => {
  return api.get(`/vinculoprodveiculo/produto/${produtoId}`);
};


// Funções para gerenciar marcas
export const getMarcas = async () => {
  return api.get('/marcas');
};

// Funções para gerenciar marcas
export const getMarcasById = async () => {
  return api.get('/marcas');
};

// Locação
export const getLocacoes = async () => {
  return api.get('/locacao');
};

export const addLocacao = async (carro) => {
  return api.post('/carros', carro);
};

// Nota Fiscal Eletronica
export const getNotafiscal = async () => {
  return api.get('/notafiscal');
};

export const addNotafiscal = async (nfe) => {
  return api.post('/notafiscal', nfe);
};

export const importNotafiscal = async (formData) => {
  return api.post('/notafiscalimport', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const getNFeById = async (id) => {
  return api.get(`/notafiscal/${id}`);
};

export const updateNFe = async (id, notafiscal) => {
  return api.put(`/notafiscal/${id}`, notafiscal);
};

export const getProdutoNFById = async (id) => {
  return api.get(`/produtosnf/${id}`);
};
export const getQuantidadeRestanteProdutoNF = async (id) => {
  return api.get(`/produtosnf/quantidadeRestante/${id}`);
};

export const vinculaProdutoNF = async (id, produto) => {
  return api.put(`/produtosnf/vincular/${id}`, produto);
};

export const desvinculaProdutoNF = async (id, produto) => {
  return api.put(`/produtosnf/desvincular/${id}`, produto);
};

// Funções para gerenciar grupoprodutos
export const getGrupoProdutos = async () => {
  return api.get('/grupoproduto');
};

export const addGrupoProdutos = async(produto) => {
  return api.post('/grupoproduto', produto);
};

export const updateGrupoProduto = (id, produto) => {
  return api.put(`/grupoproduto/${id}`, produto);
};

export const getGrupoProdutoById = async(id) => {
  return api.get(`/grupoproduto/${id}`);
};

export const deleteGrupoProduto = async (id) => {
  return api.delete(`/grupoproduto/${id}`);
};

// Funções para gerenciar subgrupoprodutos
export const getSubGrupoProdutos = async () => {
  return api.get('/subgrupoproduto');
};

export const addSubGrupoProdutos = async(produto) => {
  return api.post('/subgrupoproduto', produto);
};

export const updateSubGrupoProduto = (id, produto) => {
  return api.put(`/subgrupoproduto/${id}`, produto);
};

export const getSubGrupoProdutoById = async(id) => {
  return api.get(`/subgrupoproduto/${id}`);
};

export const deleteSubGrupoProduto = async (id) => {
  return api.delete(`/subgrupoproduto/${id}`);
};



// Funções para gerenciar produtos
export const getProdutos = async (filters = {}) => {
  const response = await api.get('/produtos', { params: filters });
  return response;
};

export const addProdutos = async(produto) => {
  return api.post('/produtos', produto);
};

export const updateProduto = (id, produto) => {
  return api.put(`/produtos/${id}`, produto);
};

export const getProdutoById = async(id) => {
  return api.get(`/produtos/${id}`);
};

// UFs e Municípios
export const getUfs =async () => {
  return api.get('/uf');
};

export const getMunicipios = async(id) => {
  return api.get(`/municipios/${id}`);
};

export const getMunicipiosIBGE = async (id, codMunIBGE) => {
  return api.get(`/municipios/mun/${id}`, codMunIBGE);
};

export const getUFIBGE = async (id, codIBGE) => {
  return api.get(`/uf/uf/${id}`, codIBGE);
};
