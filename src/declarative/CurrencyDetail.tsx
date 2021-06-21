import { useResource } from "@rest-hooks/core"
import { useParams } from "react-router"
import ExchangeRate from "../resources/ExchangeRate"

export default function CurrencyDetail() {
  const { currency } = useParams<{ currency: string }>()
  const rate = useResource(ExchangeRate.detail(), { currency })
  return (
    <>
      <h1>Exchange rates of currency {currency}</h1>
      {Object.keys(rate.data.rates).map((r: string) => (
        <div key={r}>{r} {rate.data.rates[r]}</div>
      ))}
    </>
  )
}
