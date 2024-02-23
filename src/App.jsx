import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./components/main/Mainpage";

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
