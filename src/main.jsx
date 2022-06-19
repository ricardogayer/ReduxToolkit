import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import PokemonApp from './PokemonApp';
// import TodoApp from './TodoApp';
import PokemonsQuery from './PokemonsQuery';
import {ReactQueryDevtools} from 'react-query/devtools';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { QueryClientProvider, QueryClient } from 'react-query';

import './index.css'
import PokemonApp from './PokemonApp';
import TodoApp from './TodoApp';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}> 
        <Provider store={store}>
          <PokemonsQuery/>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </React.StrictMode>
)
