import {AuthChecker, ResolverData} from 'type-graphql'

export type Role = string

function checkRoles() {
  return Promise.resolve(true)
}

export function authCheckerFactory<C>(): AuthChecker<C, Role> {
  return async (resolverData: ResolverData, roles: Role[]) => {
    await checkRoles()
    return true
  }
}
