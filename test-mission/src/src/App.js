import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// Provider é responsável por tornar o "store" disponível para todos os componentes
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

const LoadingContext = React.createContext({
    loading: false,
    message: null,
    showLoading: message => { },
    hideLoading: () => { }
})

function App() {
    const [loading, setLoading] = useState(3);

    const showLoading = () => setLoading(1)


    const  hideLoading = () => setLoading(false)

    const value = {
        loading,
        showLoading,
        hideLoading
    }

    return (
        <LoadingContext.Provider value={value}>
            <LoadingContext.Consumer>
                {
                    ({ showLoading, hideLoading, loading, message }) => (
                        <Provider store={store}>
                            <BrowserRouter>
                                <Header {...{ showLoading, hideLoading, loading }} />
                                <Routes />
                                <GlobalStyle />
                            </BrowserRouter>
                        </Provider>
                    )
                }
            </LoadingContext.Consumer>
        </LoadingContext.Provider>
    );
}

export default App;
