import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from './store/store';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    credentials: 'include',
    cache: new InMemoryCache({
        resultCaching: false,
    }),
});

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
);
