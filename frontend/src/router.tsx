import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Enter from "./pages/Enter/Enter";
import Search from "./pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Enter />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "variants",
        element: <Enter />,
      },
    ],
  },
]);

export default router;
