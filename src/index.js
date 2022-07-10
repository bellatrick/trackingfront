import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {StoreProvider} from './store'
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        {" "}
        <App />
      </StoreProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
