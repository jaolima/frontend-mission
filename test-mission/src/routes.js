import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes(props) {
    return (
        <Switch>
            <Route
                path="/"
                exact render = {() => (
                <Home {...props} test={props.products}  handleAddProduct={props.handleAddProduct} productsCart={props.productsCart}/>
                )}
            />
            <Route
                path="/cart"
                exact
                render={() => (
                    <Cart {...props} products={props.products} />
                )
            }
            />
        </Switch>
    );
}
