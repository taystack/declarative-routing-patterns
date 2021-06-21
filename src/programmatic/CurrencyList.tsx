import { useResource } from "@rest-hooks/core"
import { useState } from "react"
import useFilteredCurrencies from "../hooks/useFilteredCurrencies"
import Currency from "../resources/Currency"

export default function CurrencyListBad({
  onClick,
}: {
  onClick: (arg: Currency) => void
}) {
  const currencies = useResource(Currency.list(), {})
  const [filter, setFitler] = useState<string>('')
  const filteredCurrencies = useFilteredCurrencies(currencies.data, filter)
  return (<>
    <input value={filter} onChange={(e) => setFitler(e.target.value)} placeholder='Search' />
    <div>
      {filteredCurrencies.map((item) => (
        <div key={item.pk()}>
          <div onClick={() => onClick(item)}>{item.id} {item.name}</div>
        </div>
      ))}
    </div>
  </>)
}