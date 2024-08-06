import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./slice.ts";

const reducer = {users: usersReducer};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={configureStore({reducer})}><App /></Provider>
)
