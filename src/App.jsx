import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./components/main/Mainpage";
import RightClickProtect from "./components/RightClickProtect";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      <RightClickProtect>
        <RouterProvider router={router} />
      </RightClickProtect>
    </>
  );
}

export default App;
