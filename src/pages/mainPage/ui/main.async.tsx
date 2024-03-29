import { lazy } from 'react'

export const MainAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./mainPage')) }, 1500)
}))
