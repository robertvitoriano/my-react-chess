import React from 'react'
import {
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { Home } from './paths'

export const Routes = () => {
  return (
    <RoutesReactRouterDom>
      <Route path="/" element={<Home />} />
    </RoutesReactRouterDom>
  )
}
