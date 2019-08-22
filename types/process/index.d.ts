/* tslint:disable:interface-name no-namespace */

declare namespace NodeJS {

  export interface Process {
  }

  export interface ProcessEnv {

    readonly PORT?: string

    /**
     * Running mode
     * @default 'production'
     * @see ./build/webpack.base.js
     */
    readonly NODE_ENV?: 'production' | 'development' | 'test'

    readonly EMIT_SCHEMA_FILE?: string

  }
}
