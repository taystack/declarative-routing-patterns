import { Suspense, useCallback, useState } from "react"
import Loading from "../Loading"
import Currency from "../resources/Currency"
import CurrencyDetailBad from "./CurrencyDetail"
import CurrencyListBad from "./CurrencyList"

export default function ProgrammaticRouter() {
  const [currency, setCurrency] = useState<Currency | undefined>()

  return (
    <Suspense fallback={<Loading />}>
      <h1>Programmatic routes 😟</h1>
      {!currency && <h1>List of currencies</h1>}
      {!currency && <CurrencyListBad onClick={(curr: Currency) => setCurrency(curr)} />}
      {currency && <h1>
        <span onClick={() => setCurrency(undefined)}>Back - </span>
        Exchange rates of currency {currency.id}
      </h1>}
      {currency && <CurrencyDetailBad currency={currency} />}
    </Suspense>
  )
}
