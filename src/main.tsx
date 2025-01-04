/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
         <RouterProvider router={routes}></RouterProvider>
      </Provider>
      </ThemeProvider>
      
   </StrictMode>
);
