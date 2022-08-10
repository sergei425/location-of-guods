import { List } from '../list';

export function Catalog({products, value}) {
  return (
    <div className="catalog">
      <div className="catalog__content">
        <List products={products} value={value}/>
      </div>
    </div>
  )
}