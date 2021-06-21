import { Suspense } from "react";
import { Route, Switch } from "react-router";
import Loading from "../Loading";
import CurrencyDetail from "./CurrencyDetail";
import CurrencyList from "./CurrencyList";

export default function DeclarativeRouter() {
  return (<Suspense fallback={<Loading />}>
    <h1>Declarative routes 😊</h1>
    <Switch>
      <Route exact path={'/declarative'} component={CurrencyList} />
      <Route exact path={'/declarative/rates/:currency'} component={CurrencyDetail} />
    </Switch>
  </Suspense>)
}
