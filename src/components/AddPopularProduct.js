const AddPopularProduct = (props) => {

  const product = [
    {text: 'baguette', emoji: '🥖'},
    {text: 'burger', emoji: '🍔'},
    {text: 'pizza', emoji: '🍕'},
    {text: 'oeuf', emoji: '🥚'},
    {text: 'steak', emoji: '🥩'},
    {text: 'croissant', emoji: '🥐'},
  ]

  const { basket, addToShoppingList } = props

  return <section className="row">
          <h3 class="h5">Avez vous besoin de ?</h3>
          <div className="mb-3 d-flex flex-wrap align-items-center">
          {
          product.map((el) => {
            return (
              <button key={el.text} onClick={() => addToShoppingList(el.text)} class="btn btn-outline-success me-2 mb-2 d-flex align-items-center" disabled={basket.includes(el.text)}>
                {el.text}
                <span className="fs-1" role="img" aria-hidden="true">{el.emoji}</span>
              </button>
            )})
          }
          </div>
         </section>
  
}

export default AddPopularProduct