import React, { useEffect, useContext, useState } from "react";
import * as api from "../../services/ApiCrudCrud";
import { Div, Table, Tr, Th, Td, Button } from "../../pages/ListItems/style";
import HeaderABM from "../../components/HeaderABM";
import TodoContext from '../../context/TodoContext';

export default function DetailsItem() {
    const { idItem } = useContext(TodoContext);
    const [item, setItem] = useState();
    
    useEffect(() => {
        api.getIdApiCrud(idItem)
        .then(data => {
           setItem(data);
        }).catch((error) => {
          alert("Ocorreu um erro ao buscar o item");
        });
    }, [idItem]);

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
                    {item && (
                     <Tr>
                        <Td>{item._id}</Td>
                        <Td>{item.quantity}</Td>
                        <Td>{item.product.productName}</Td>
                        <Td>{item.price}</Td>
                        <Td>{item.client.clientName}</Td>
                        <Td>{item.active}</Td>                            
                    </Tr>
                    )}                 
                </Table>
            </Div>
        </Div>
    );
}