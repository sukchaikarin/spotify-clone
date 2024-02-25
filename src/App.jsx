import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/main/home/Homepage";
import Signup from "./components/signup/Signup";
import SearchPage from "./components/main/search/SearchPage";
import RightClickProtect from "./components/item/RightClickProtect";
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
