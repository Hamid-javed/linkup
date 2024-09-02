import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";



function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </>
    )
  );

  return (
    <>
        <RouterProvider router={router} />;
    </>
  );
}

export default App;
