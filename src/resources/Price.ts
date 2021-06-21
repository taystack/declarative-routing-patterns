import { Resource } from "@rest-hooks/rest";


export default class Price extends Resource {
  readonly currency: string = ''
  readonly amount: string = ''
  readonly base: string = ''
  
  static detail<T extends typeof Resource>(this: T) {
    return super.detail().extend({
      schema: { data: this },
      url({ currency }: { currency: string }) {
        return `${Price.urlRoot}?currency=${currency}`
      }
    });
  }

  static list<T extends typeof Resource>(this: T) {
    return super.list().extend({
      schema: { data: [this] },
      url() {
        return 'https://api.coinbase.com/v2/prices'
      }
    })
  }
  
  pk() {
    return this.currency
  }

  static urlRoot = 'https://api.coinbase.com/v2/prices/spot'
}
