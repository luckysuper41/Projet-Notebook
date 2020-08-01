import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { createStore } from "redux";

//Để các component khác có thể tương tác với Store ta cần bọc root component bởi Provider. 
//Ở file src/index.js sẽ chỉnh sửa lại như sau.

//Gọi reducers
import reducers from "./reducers/index";

//Tạo store từ reducers
const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
