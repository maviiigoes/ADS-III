import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import "./pag_inicial.css";

const Minha_marca = () => {
    const [marca, setObjetos] = useState([]);
    useEffect(() => {
        setObjetos([
          { id: 1, nome: 'Marca 1' },
          { id: 2, nome: 'Marca 2' },
          { id: 3, nome: 'Marca 3' },
          { id: 3, nome: 'Marca 4' },
          { id: 3, nome: 'sorria' },
        ]);
      }, []);

      return (
        <div className="container"> 
        <div className="marcas">
            <div>
                {marca.map(marca => (
                    
                       <Link  to={`/marca/${marca.id}`}>{/* id da marca que possui os produtos */}
                         <button className="bt_marca"> {marca.nome}</button>
                          </Link>
                ))}
            </div>

        </div>
        </div>
      )
   
  };






function Pag_inicial() {
    return (
        <div className="pag_inicial">
            {Minha_marca()}

            <Link  to="/cadastroMarca">
                <button className="addMarca">+</button>
            </Link>
        </div>
       
    

    )
}

export default Pag_inicial