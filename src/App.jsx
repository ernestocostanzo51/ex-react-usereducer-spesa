import { useState } from 'react'



function App() {
const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
]

const [addedProducts , setaddedProducts] = useState([])

const addToCart = (index) => {
  const selectedProduct = 
    products[index]

const isAlreadyInCart = addedProducts.some(item => item.name === selectedProduct.name)

    if (isAlreadyInCart) {
      return 
    }
  setaddedProducts([...addedProducts , {...selectedProduct , quantity : 1}])
 
}

  return (
    <>
     <h2>Lista Prodotti</h2>
     <ul>
{
  products.map((product, index) => (
    <li key={index}>
      {product.name} <strong>{product.price}€</strong>
      <button onClick={() => addToCart(index)}>Agg al carrello</button>
    </li>
  ))}
     </ul>

     <h2>CARRELLO</h2>
     <p>Ogetti il carrello : {addedProducts.length}</p>
     <ul>
          {addedProducts.map((item, index) => (
            <li key={index}>
              {item.name}  {item.price}€  x{item.quantity}
            </li>
          ))}
        </ul>
     
    </>
  )
}

export default App
