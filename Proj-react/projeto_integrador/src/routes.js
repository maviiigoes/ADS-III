import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Pag_inicial from './pages/Pag_inicial'   
import PesquisaFornecedores from './pages/Fornecedores'
import Clientes from './pages/Clientes'
import Vendas from './pages/Vendas'
import Relatorio from './pages/Relatorio'
import Cadastro_marca from './pages/Pag_inicial/Cadastro_marca'
import Produtos from './pages/Marcas'
import Cadastro_prod from './pages/Marcas/Cadastro_prod'
import CadastroFornecedor from './pages/Fornecedores/Cadastro_fornecedor'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
               
                
                <Route path="/" element={ <Pag_inicial/> }/> 
                <Route path="/clientes" element={ <Clientes/> }/> 
                <Route path="/cadastroMarca" element={ <Cadastro_marca/> }/> 
                <Route path='/marca/:id' element={<Produtos/>}/>
                <Route path='/cadastroProduto' element={<Cadastro_prod/>}/>
                <Route path='/fornecedores' element={<PesquisaFornecedores/>}/>
                <Route path='//cadastroFornecedor' element={<CadastroFornecedor/>}/>
            
            </Routes>
        </BrowserRouter>
    )  
}

export default RoutesApp; 
      

        
