import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import store, { persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router />
                </PersistGate>
            </Provider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />)



