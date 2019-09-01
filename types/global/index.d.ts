/* tslint:disable:no-namespace */
declare var Cypress: any
declare var cy: any
declare const expect: Chai.ExpectStatic

declare namespace NodeJS {
  export interface Global {
    TypeGraphQLMetadataStorage?: any
  }
}
