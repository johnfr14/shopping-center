import { useState } from 'react'
import ShoppingList from './ShoppingList'
import AddProductForm from './AddProductForm'
import AddPopularProduct from './AddPopularProduct'

const ShoppingApp = () => {
  
  const [basket, setBasket] = useState([])

  const addToShoppingList = (product) => {
    setBasket([...basket, product])
  }

  const removeToShoppingList = (product) => {
    setBasket(basket.filter((el) => el !== product))
  }

  return <main className="row">
          <ShoppingList basket={basket} removeToShoppingList={removeToShoppingList} />
          <section class="col-lg-4">
            <div class="bg-light border p-4">
              <AddProductForm basket={basket} addToShoppingList={addToShoppingList} />
              <AddPopularProduct basket={basket} addToShoppingList={addToShoppingList} />
            </div>
          </section>
        </main>
   
}

export default ShoppingApp