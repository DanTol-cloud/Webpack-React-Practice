import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  console.log(Object.values(RouteConfig))
  return (
        <Suspense fallback={<div>...loading</div>}>
            <Routes>
                {Object.values(RouteConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className='page'>
                                {element}
                            </div>
                        }
                    />
                ))}
            </ Routes>
        </Suspense>
  )
}

export default AppRouter
