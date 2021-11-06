import React, { useState, useEffect } from "react";
import { Div, Table, Tr, Th, Td } from "../../pages/ListItems/style";
import HeaderABM from "../../components/HeaderABM";
import * as api from "../../services/ApiCrudCrud";

export default function ListItems() {
    const [items, setItems] = useState([]);

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
                    <Tr>
                        <Td>{item._id}</Td>
                        <Td>{item.quantity}</Td>
                        <Td>{item.product.productName}</Td>
                        <Td>{item.price}</Td>
                        <Td>{item.client.clientName}</Td>
                        <Td>{item.active}</Td>
                    </Tr>
                ))}
            </Table>
        </Div>
    );
}