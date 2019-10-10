import {plainToClass} from 'class-transformer'
export const response = plainToClass

export const error = (message: any) => {
  // tslint:disable-next-line:no-console
  console.log(message)
}
