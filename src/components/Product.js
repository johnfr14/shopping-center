const Product = (props) => {
  const { basket, removeToShoppingList } = props

  const handleButtonClick = (event) => {
    removeToShoppingList(event.target.value)
  }

  return (
      basket.map((el) => {
        return (
          <li class="list-group-item">
            <div class="d-flex align-items-center justify-content-between">
              {el}
            <button key={el} value={el} onClick={handleButtonClick} class="btn btn-sm btn-warning">x</button>
            </div>
          </li>
        )
      })
  )
}

export default Product