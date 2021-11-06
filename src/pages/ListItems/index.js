import React, { useState, useEffect, useContext } from "react";
import { Div, Table, Tr, Th, Td, Button } from "../../pages/ListItems/style";
import HeaderABM from "../../components/HeaderABM";
import { useNavigate } from "react-router-dom";
import TodoContext from "../../context/TodoContext";
import * as api from "../../services/ApiCrudCrud";

export default function ListItems() {
  const [items, setItems] = useState([]);
  const { setIdItem } = useContext(TodoContext);
  let navigate = useNavigate();

  function handleSelect(idItem) {
    navigate("/details-items");
    setIdItem(idItem);
  }

  function handleDelete(idItem) {
    api.deleteApiCrud(idItem);
    alert(`${idItem} deletado com sucesso!`);
    window.location.reload();
  }

  useEffect(() => {
    api.getApiCrud()
      .then(data => {
        setItems(data);
      }).catch(() => {
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
                onClick={() => handleSelect(item._id)}
              >
                Select
              </Button>
              <Button second
                type="button"
                onClick={() => handleDelete(item._id)}
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