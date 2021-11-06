const URL = "https://crudcrud.com/api/e4237c617e4f42f29702696b91b3db3c";

export const PostApiCrud = async (quantityItem, priceItem, productItem, clientName, activeItem) => {
  return fetch(`${URL}/item`, { 
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({ 
            quantity: `${quantityItem}`, 
            price: `${priceItem}`,
            product: {
              productName: `${productItem}`  
            },
            client: {
              clientName: `${clientName}`
            },
            active: `${activeItem}` 
        }) 
    }).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('Api error'))
  ));
}

export const getApiCrud = async () => {
  return fetch(`${URL}/item`).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('Api error'))
  ));
}

export const getIdApiCrud = async (id) => {
  return fetch(`${URL}/item/${id}`).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('Api error'))
  ));
}

export const deleteApiCrud = async (id) => {
  return fetch(`${URL}/item/${id}`, {
    method: 'DELETE'
  }).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('Api error'))
  ));
}

export const PutApiCrud = async (quantityItem, priceItem, productItem, clientName, activeItem, id) => {
  return fetch(`${URL}/item/${id}`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'PUT',
    body: JSON.stringify({
      quantity: `${quantityItem}`, 
            price: `${priceItem}`,
            product: {
              productName: `${productItem}`  
            },
            client: {
              clientName: `${clientName}`
            },
            active: `${activeItem}` 
    })
  }).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('Api error'))
  ));
}