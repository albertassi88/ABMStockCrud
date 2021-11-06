import React, { useState, useEffect } from "react";
import { Div, Table, Tr, Th, Td, Button } from "../../pages/ListItems/style";
import HeaderABM from "../../components/HeaderABM";
import { useNavigate } from "react-router-dom";
import * as api from "../../services/ApiCrudCrud";

export default function ListItems() {
    const [items, setItems] = useState([]);
    let navigate = useNavigate();

    function handleSelect() {
        navigate("/details-items");
    }

    useEffect(() => {
        api.getApiCrud()
        .then(data => {
           setItems(data);
        }).catch((error) => {
          alert("Ocorreu um erro ao buscar os items");
        });
    }, []);

    return (
        <Div>
            <HeaderABM />
            <Div second>
                <Table>
                    <Tr>
                        <Th>_Id</Th>
                        <Th>Quantity</Th>
                        <Th>Product Name</Th>
                        <Th>Price</Th>
                        <Th>Client</Th>
                        <Th>Active</Th>
                    </Tr>
                    {items.map((item, index) => (
                        <Tr key={index}>
                            <Td>{item._id}</Td>
                            <Td>{item.quantity}</Td>
                            <Td>{item.product.productName}</Td>
                            <Td>{item.price}</Td>
                            <Td>{item.client.clientName}</Td>
                            <Td>{item.active}</Td>
                            <Button
                                type="button"
                                onClick={() => handleSelect()}
                            >
                                Select
                            </Button>
                            <Button second
                                type="button"
                            >
                                Delete
                            </Button>
                        </Tr>
                    ))}
                </Table>
            </Div>    
        </Div>
    );
}