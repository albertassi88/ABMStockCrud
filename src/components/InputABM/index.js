import React, { useState, useContext } from "react";
import { Div, Input, Button } from "./style";
import { useNavigate } from "react-router-dom";
import TodoContext from '../../context/TodoContext';

export default function InputABM(props) {
    const { urlItems, apiService } = props;
    const { idItem } = useContext(TodoContext);
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState("");
    const [client, setClient] = useState("");
    const [active, setActive] = useState(""); 

    let navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    function handleAddItems() {
        if (quantity === "" || price === "" || product === "" || client === "" || active === "") {
            alert("Favor preencher todos os campos!");
        }else{
            try {
                apiService(quantity, price, product, client, active, idItem);
                setQuantity("");
                setPrice("");
                setProduct("");
                setClient("");
                setActive("");
                navigate(`/${urlItems}`);
            } catch (error) {
                alert("Erro! Favor tentar novamente");
            }
        }
    }

    return (
        <Div second>
                <Input 
                    placeholder="Digite a quantidade" 
                    value={quantity} 
                    type="number"
                    onChange={({target}) => setQuantity(target.value)}
                />
                <Input 
                    placeholder="Digite o preço" 
                    value={price} 
                    type="number"
                    onChange={({target}) => setPrice(target.value)}
                />
                <Input 
                    placeholder="Digite o nome do produto" 
                    value={product} 
                    type="text"
                    onChange={({target}) => setProduct(target.value)}
                />
                <Input 
                    placeholder="Digite o nome do cliente" 
                    value={client} 
                    type="text"
                    onChange={({target}) => setClient(target.value)}
                />
                <Input 
                    placeholder="Digite se o produto esta ativo" 
                    value={active} 
                    type="text"
                    onChange={({target}) => setActive(target.value)}
                />
                <Button 
                    type="button"
                    onClick={() => handleAddItems()}
                >
                    Salvar
                </Button>
                <Button second
                    type="button"
                    onClick={() => handleHome()}
                >   
                    Voltar
                </Button>
            </Div>
    )
}