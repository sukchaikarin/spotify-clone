import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./components/main/Mainpage";
import RightClickProtect from "./components/RightClickProtect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
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
