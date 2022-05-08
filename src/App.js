import logo from './logo.svg';
import './App.css';
import {Link, Navigate, Outlet} from "react-router-dom";
import {isLoggedIn} from './routes/helpers.js';
import {Login} from "./routes/login/login";
import Invoices from "./routes/invoices/invoices";

function App() {
    console.log(isLoggedIn())
    let returnElement = isLoggedIn() ? <Invoices/> : <Login/>
    return (returnElement)
}

export default App;
