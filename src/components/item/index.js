import './style.css'

export function Item({item, value}) {
  return (
    <li className={`item ${value === 'view_list' ? 'module' : ''}`}>
      <h2 className="item__title">{item.name}</h2>
      <span className="item__color">{item.color}</span>
      <div className="item__wrap">
        <span className="item__price">{new Intl.NumberFormat("en", {style: "currency", currency: "USD"}).format(item.price)}</span>
      <button className="item__button">add to card</button>
      </div>
      <div className="item__image">
        <img src={item.img} alt={item.name}  />
      </div>
    </li>
  )
}