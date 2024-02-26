import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/pages/home/Homepage";
import RightClickProtect from "./components/RightClickProtect";
import Signup from "./components/pages/Signup";
import SearchPage from "./components/pages/search/SearchPage";
import Member from "./components/pages/member/Member";
import Login from "./components/pages/Login";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: (
      // <RightClickProtect>
      <SearchPage />
      // </RightClickProtect>
    ),
  },
  {
    path: "/member",
    element: <Member />,
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
