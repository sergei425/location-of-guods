import { Item } from "../item";
import './style.css'

export function List({products, value}) {
  console.log(value);
  return (
    <ul className={`list ${value === 'view_list' ? 'module' : ''}`}>
      {
        products.map((el, i) => <Item key={`${i}_${el.name}`} item={el} value={value}/>)
      }
    </ul>
  )
}