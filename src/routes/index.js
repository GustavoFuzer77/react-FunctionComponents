import { Switch, Route } from 'react-router-dom'; //v6 <-

import ItemIdParams from '../pages/idItem'
import Login from "../pages/login";
import Itens from "../pages/itens";
import PageError404 from '../pages/page404/index';
import PrivateRoute from './PrivateRoute';

export default function Rotas() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/item' render={() => (<Itens/>)}  />
      <Route path='/item/:id' component={ItemIdParams} />
      <Route path='*' component={PageError404} />
    </Switch>
  )
}

