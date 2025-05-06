import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomeLayout, Error, Legal, Landing } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        path: "legal",
        element: <Legal />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
