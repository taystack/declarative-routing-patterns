import { useResource } from "@rest-hooks/core"
import Currency from "../resources/Currency"
import ExchangeRate from "../resources/ExchangeRate"

export default function CurrencyDetailBad({
  currency,
}: {
  currency: Currency
}) {
  const rate = useResource(ExchangeRate.detail(), { currency: currency.id })
  return (
    <div>
      {Object.keys(rate.data.rates).map((r: string) => (
        <div key={r}>{r} {rate.data.rates[r]}</div>
      ))}
    </div>
  )
}
