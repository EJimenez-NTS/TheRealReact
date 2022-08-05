import React from "react";
import { Routes, Route, Switch, useRoutes } from "react-router-dom"
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom"



// Importing Components

import TodoContainer from "./functionBased/components/TodoContainer";



// Importing Stylesheet

import "./functionBased/App.css";

const App = () => {
    let routes = useRoutes([
        { path: "/", element: <TodoContainer /> }
        // ...
    ]);
    return routes;
};

ReactDOM.render(

    <React.StrictMode>

        <Router>

            <App />

        </Router>

    </React.StrictMode>,

    document.getElementById("root")

)