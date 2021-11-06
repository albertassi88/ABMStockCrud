import React, { useState } from "react";
import * as api from "../../services/ApiCrudCrud";
import HeaderABM from "../../components/HeaderABM/index";
import { Div, Input, Button } from "./style";

export default function CreateItems() {
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState("");
    const [client, setClient] = useState("");
    const [active, setActive] = useState(""); 

    function handleAddItems() {
        if (quantity === "" || price === "" || product === "" || client === "" || active === "") {
            alert("Favor preencher todos os campos!");
        }else{
            try {
                api.PostApiCrud(quantity, price, product, client, active);
                setQuantity("");
                setPrice("");
                setProduct("");
                setClient("");
                setActive("");
            } catch (error) {
                alert("Erro! Favor tentar novamente");
            }
        }
    }

    return (
        <Div>
            <HeaderABM />
            <Div second>
                <Input 
                    placeholder="Quantidade" 
                    value={quantity} 
                    type="number"
                    onChange={({target}) => setQuantity(target.value)}
                />
                <Input 
                    placeholder="Preço" 
                    value={price} 
                    type="number"
                    onChange={({target}) => setPrice(target.value)}
                />
                <Input 
                    placeholder="Nome do produto" 
                    value={product} 
                    type="text"
                    onChange={({target}) => setProduct(target.value)}
                />
                <Input 
                    placeholder="Nome do cliente" 
                    value={client} 
                    type="text"
                    onChange={({target}) => setClient(target.value)}
                />
                <Input 
                    placeholder="Ativo?" 
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
            </Div>
        </Div>
    );
}