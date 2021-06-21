import { Resource } from "@rest-hooks/rest";


export default class Currency extends Resource {
  readonly id: string = ''
  readonly name: string = ''
  readonly min_size: string = ''

  pk() {
    return this.id
  }

  static list<T extends typeof Resource>(this: T) {
    return super.list().extend({
      schema: { data: [this] },
    })
  }

  static urlRoot = 'https://api.coinbase.com/v2/currencies'
}
