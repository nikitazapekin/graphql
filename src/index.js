/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"
const root = ReactDOM.createRoot(document.getElementById('root'));
const client=new ApolloClient({
 url: `http://localhost:5000/graphql`,
 cache: new InMemoryCache()
})
root.render(
<ApolloProvider client={client}>

    <App />
</ApolloProvider>
  
);
*/






import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
  document.getElementById('root')
);

