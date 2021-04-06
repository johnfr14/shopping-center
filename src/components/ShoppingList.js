import Product from './Product'

const ShoppingList = (props) => {
  const { basket, removeToShoppingList } = props

  return (
    <section class="col-lg-8">
      <h2 class="mb-3 h4">Produits à acheter {basket.length}:</h2>
      <ol class="list-group mb-3 shadow">
        <Product basket={basket} removeToShoppingList={removeToShoppingList} />
      </ol>
    </section>
    
  )
}

export default ShoppingList