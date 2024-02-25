import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/pages/home/Homepage";
import RightClickProtect from "./components/RightClickProtect";
import Signup from "./components/pages/Signup";
import SearchPage from "./components/pages/search/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RightClickProtect>
        <Homepage />
      </RightClickProtect>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/search",
    element: (
      <RightClickProtect>
        <SearchPage />
      </RightClickProtect>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
