import { Suspense } from 'react'
import { Route, Switch } from 'react-router'
import DeclarativeRouter from './declarative/Router'
import ProgrammaticRouter from './programmatic/Router'
import Loading from './Loading'


export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path='/programmatic' component={ProgrammaticRouter} />
        <Route path='/declarative' component={DeclarativeRouter} />
      </Switch>
    </Suspense>
  )
}
