// API is available at import.meta.env.VITE_API_URL

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShortUrlRedirectComponent from "app/src/components/short-url-redirect-component/short-url-redirect-component";
import ShortUrlFormComponent from "app/src/components/short-url-form-component/short-url-form-component";

const router = createBrowserRouter([
  {
    path: "",
    element: <ShortUrlFormComponent></ShortUrlFormComponent>,
  },
  {
    path: ":nanoid",
    element: <ShortUrlRedirectComponent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
