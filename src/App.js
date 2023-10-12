import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/Router";


const App = () => {
    return (
        <Router />
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />)



