import React from "react";
import { Div, Button } from "./style";

export default function ButtonABM() {
    return (
        <Div>
            <Button
                type="button"
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