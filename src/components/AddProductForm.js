const AddProductForm = (props) => {

  const {basket, addToShoppingList} = props 

  const handleSubmitClick = (event) => {
    event.preventDefault()
    const newProduct = event.target.elements.product.value

    if (basket.includes(newProduct)) {
      alert(`${newProduct} already exist`)
    } else {
      addToShoppingList(newProduct)
    }
    event.target.reset()
  }
  
  
  return (
    <>
    <h2 class="mb-3 h4">Ajouter un produit :</h2>
    <form className="mb-5" onSubmit={handleSubmitClick}>
        <div className="input-group mb-2">
            <input
              id="product"
              className="form-control"
              aria-label="Ajouter sur la liste"
              required=""
        /><button type="submit" class="btn btn-success btn-lg">
              J'ajoute !
          </button>
        </div>
      </form>
    </>
  )
}

export default AddProductForm