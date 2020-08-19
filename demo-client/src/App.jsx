import React from 'react';
import './App.css';

// components
import Base from "./landing/Base";

// redux
import {
    store,
    persistor
} from "./redux/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Base />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
