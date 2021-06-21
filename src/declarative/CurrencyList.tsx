import { useResource } from "@rest-hooks/core"
import { Link } from "react-router-dom"
import useFilteredCurrencies from "../hooks/useFilteredCurrencies"
import useSearchFilter from "../hooks/useSearchFilter"
import Currency from "../resources/Currency"

export default function CurrencyList() {
  const currencies = useResource(Currency.list(), {})
  const [filter, handleChange] = useSearchFilter()
  const filteredCurrencies = useFilteredCurrencies(currencies.data, filter)
  return (<>
    <h1>List of currencies</h1>
    <input value={filter} onChange={handleChange} placeholder='Search' />
    <div>
      {filteredCurrencies.map((item) => (
        <div key={item.pk()}>
          <Link to={`/declarative/rates/${item.id}`}>{item.id} {item.name}</Link>
        </div>
      ))}
    </div>
  </>)
}