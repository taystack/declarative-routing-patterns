import { Resource } from "@rest-hooks/rest";


export default class ExchangeRate extends Resource {
  readonly currency: string = ''
  readonly rates: Record<string, string> = {}

  pk() {
    return this.currency
  }

  static detail<T extends typeof Resource>(this: T) {
    return super.detail().extend({
      schema: { data: this },
      url({ currency }: { currency: string }) {
        return `${ExchangeRate.urlRoot}?currency=${currency}`
      }
    })
  }

  static urlRoot = 'https://api.coinbase.com/v2/exchange-rates'
}
