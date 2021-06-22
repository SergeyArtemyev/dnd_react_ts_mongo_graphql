import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from './store/store';
// i used the same css file(added some fixes) as in the previous dnd project
import './index.css';

const client = new ApolloClient({
    // i had to live a heroku url here because env var in heroku setting didn't worked, or i messed up
    uri: process.env.APOLLO_URL ? process.env.APOLLO_URL : 'https://murmuring-gorge-50640.herokuapp.com/graphql',
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
