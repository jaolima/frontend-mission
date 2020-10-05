import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { formatPrice } from './util/format';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';
import api from "./services/api";

const LoadingContext = React.createContext({
    loading: 3,
    message: null,
    amount: 0,
    products: [],
    productsCart: [],
    showLoading: message => { },
    hideLoading: () => { }
})

class App extends Component {
    state = {
        loading: 3,
        products: [],
        amount: 0,
        productsCart: [],
    }

    async componentDidMount() {

        const response = await api.get('products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));
        this.setState({products: data});
    }

    handleAddProduct = newProduct => this.setState({
        productsCart: [...this.state.productsCart, newProduct]
    });


    render(){
        const { hideLoading , handleAddProduct} = this

        const value = {
            ...this.state,
            handleAddProduct,
            hideLoading,
        }
        return (
            <LoadingContext.Provider value={value}>
                <LoadingContext.Consumer>
                    {
                        ({  productsCart, products, amount, handleAddProduct }) => (
                            <Provider store={store}>
                                <BrowserRouter>
                                    <Header  {...{ amount }} />
                                    <Routes {...{ products , handleAddProduct, productsCart}}/>
                                    <GlobalStyle />
                                </BrowserRouter>
                            </Provider>
                        )
                    }
                </LoadingContext.Consumer>
            </LoadingContext.Provider>
        );
    }


}

export default App;
