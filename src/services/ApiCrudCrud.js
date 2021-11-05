export default async function CrudCrud(quantityItem, priceItem, productItem, clientName, activeItem) {
  return fetch("https://crudcrud.com/api/865b385775f745a488567153703d0cc8/item", { 
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

