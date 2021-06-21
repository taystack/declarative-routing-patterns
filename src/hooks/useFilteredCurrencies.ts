import { useMemo } from "react"
import Currency from "../resources/Currency"

export default function useFilteredCurrencies(currencies: Currency[], filter: string) {
  const f = useMemo(() => new RegExp(filter, 'gi'), [filter])
  return useMemo(() => currencies.filter((currency) => (currency.name.match(f)) || currency.id.match(f)), [currencies, f])
}
