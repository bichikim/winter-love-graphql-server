/* tslint:disable:no-namespace */
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    EMIT_SCHEMA_FILE: string
    PUB_SUB_REDIS_HOST: string
    PUB_SUB_REDIS_PORT: string
    MONGODB_URL: string
    MONGODB_SCHEMAS: string
    SRC: string
  }
}
