import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RightClickProtect from "./components/RightClickProtect";
import Signup from "./components/Signup";
import Homepage from "./components/main/Homepage";
import SearchPage from "./components/main/SearchPage";

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
