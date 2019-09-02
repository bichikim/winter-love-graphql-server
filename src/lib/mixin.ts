/* tslint:disable:ban-types variable-name */
export function Mixin<A>(classA: AnyClass<A>): AnyClass<A>
export function Mixin<A, B>(classA: AnyClass<A>, classB: AnyClass<B>): AnyClass<A & B>
export function Mixin<A, B, C>(
  classA: AnyClass<A>, classB: AnyClass<B>, classC: AnyClass<C>,
): AnyClass<A & B & C>
export function Mixin<A, B, C, D>(
  classA: AnyClass<A>, classB: AnyClass<B>, classC: AnyClass<C>, classD: AnyClass<D>,
): AnyClass<A & B & C & D>
export function Mixin<A, B, C, D, E>(
  classA: AnyClass<A>, classB: AnyClass<B>, classC: AnyClass<C>, classD: AnyClass<D>,
  classE: AnyClass<E>,
  ): AnyClass<A & B & C & D & E>
export function Mixin<A, B, C, D, E, F>(
  classA: AnyClass<A>, classB: AnyClass<B>, classC: AnyClass<C>, classD: AnyClass<D>,
  classE: AnyClass<E>, classF: AnyClass<F>,
  ): AnyClass<A & B & C & D & E & F>
export function Mixin<A, B, C, D, E, F, G>(
  classA: AnyClass<A>, classB: AnyClass<B>, classC: AnyClass<C>, classD: AnyClass<D>,
  classE: AnyClass<E>, classF: AnyClass<F>, classG: AnyClass<G>,
): AnyClass<A & B & C & D & E & F & G>
export function Mixin<A, B, C, D, E, F, G, H>(
  classA: AnyClass<A>, classB: AnyClass<B>, classC: AnyClass<C>, classD: AnyClass<D>,
  classE: AnyClass<E>, classF: AnyClass<F>, classG: AnyClass<G>, classH: AnyClass<H>,
): AnyClass<A & B & C & D & E & F & G & H>
export function Mixin<T>(...classes: AnyClass[]): T
export function Mixin(...classes: any): any {
  const [first, ..._classes] = classes
  let target: any = first

  _classes.forEach((classOne: any) => {
    target = mix(target, classOne)
  })
  return target
}

type AnyClass<A = any> = new (...args: any) => A

const mix = (
  Source: any,
  Base: any,
): any => {
  class Mixed extends Base {
    constructor(...args: any[]) {
      super()
      const source = new Source(...args)
      Object.assign(this, source)
    }
  }
  for(const propName of Object.getOwnPropertyNames(Source.prototype)){
    if(propName === 'constructor'){
      continue
    }
    const descriptor = Object.getOwnPropertyDescriptor(Source.prototype, propName)

    if(!descriptor){
      continue
    }
    Object.defineProperty(Mixed.prototype, propName, descriptor)
  }
  if(Source.prototype[Symbol.iterator]){
    const descriptor = Object.getOwnPropertyDescriptor(Source.prototype, Symbol.iterator)
    if(descriptor){
      Object.defineProperty(Mixed.prototype, Symbol.iterator, descriptor)
    }
  }
  return Mixed
}
