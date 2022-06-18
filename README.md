# React Redux Toolkit

## Conceitos

* Store - Fonte única da verdade. Lugar onde as informações ficam armazenadas.
* Reducer - Faz a manipulação dos estados.
* View - Consome os dados do store e executam action para alteração no store via dispatcher que chama o reducer.
* Middleware - Executa as chamadas assincronas.

## Configurações necessárias

[RTK Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)

```sh
yarn add @reduxjs/toolkit react-redux
```

### Criar uma pasta chamada store e um arquivo chamado store.js

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```

### Disponibilizar um provider envolvendo toda aplicação em main.jsx

```js
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
```

### Criar dentro de store uma pasta chamada slices. O slice recebe os objetos que queremos manter o estado

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
```

Nota - A exportação default foi removida!

### Adicionar o slice reducer no store

```js
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});
```

## Alterar a página App para mostrar a utilização do RTK

Necessário importar "useSelector, useDispatch" de Redux e
importar os métodos do slice reducer.

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/slices/counter/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App;
```

* useSelector - Para acessar os objetos armazenados na store.
* useDispatch - Para executar uma ação de mudança do estado da store.
* increment() - Método do slice para executar a ação!
