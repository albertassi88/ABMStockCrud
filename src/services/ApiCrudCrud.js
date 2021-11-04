export default async function CrudCrud(quantityItem, priceItem, productItem, clientName, activeItem) {
  return fetch("https://crudcrud.com/api/289c303b2fca4914ad55075ea70e125f/item", { 
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({ 
            quantity: `${quantityItem}`, 
            price: `${priceItem}`,
            product: {
              name: `${productItem}`  
            },
            client: {
              name: `${clientName}`
            },
            active: `${activeItem}` 
        }) 
    }).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('Api error'))
  ));
}

