import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FeaturePage from "./pages/FeaturePage";


function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
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
