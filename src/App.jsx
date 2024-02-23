import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./components/Mainpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
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
