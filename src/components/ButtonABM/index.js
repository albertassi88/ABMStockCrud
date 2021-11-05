import React from "react";
import { Div, Button } from "./style";
import { useNavigate } from "react-router-dom";

export default function ButtonABM() {
    let navigate = useNavigate();

    function handleAddItems() {
        navigate("/items");
    }

    return (
        <Div>
            <Button
                type="button"
                onClick={() => handleAddItems()}
            >
                Cadastrar
            </Button>
            <Button second
                type="button"
            >
                Consultar
            </Button>
        </Div>
    );
}