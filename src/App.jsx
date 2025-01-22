import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Services from './Components/Services';
import About from './Components/About';
import CreateProductPage from './Components/CreateProductPage';
import ProductDetails from './Components/ProductDetails';
import CategoryPage from './Components/CategoryPage';
import DashBoard from './Components/DashBoard';
import UpdateProductPage from './Components/UpdateProductPage';
import DeleteProductPage from './Components/DeleteProductPage';
import Cart from './Components/Cart';
import OrderHistory from './Components/OrderHistory';

// Layout component wrapping Navbar, main content (with Outlet for nested routes), and Footer
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* Placeholder for nested routes */}
      </main>
      <Footer />
    </>
  );
};

// Define router paths and corresponding components
const appRouter = createBrowserRouter([
  {
    path: '/', // This is the base path for all routes
    element: <Layout />, // Layout wraps all the pages
    children: [
      {
        path: '/', // This is the Home page
        element: <Home />,
      },
      {
        path: 'login', // Login page
        element: <Login />,
      },
      {
        path: 'signup', // Signup page
        element: <Signup />,
      },
      {
        path: 'services', // Services page
        element: <Services />,
      },
      {
        path: 'about', // About page
        element: <About />,
      },
      {
        path: 'create-product', // Create Product page
        element: <CreateProductPage />,
      },
      {
        path: 'product/:id', // Product Details page, using dynamic product ID
        element: <ProductDetails />,
      },
      {
        path: 'category/:category', // Category Page, dynamic based on category
        element: <CategoryPage />,
      },
      {
        path: 'dashboard', // Admin Dashboard page
        element: <DashBoard />,
      },
      {
        path: 'update-product/:productId', // Update Product page
        element: <UpdateProductPage />,
      },
      {
        path: 'delete-product/:productId', // Delete Product page
        element: <DeleteProductPage />,
      },
      {
        path: 'cart', // Cart page
        element: <Cart />,
      },
      {
        path: 'order-history', // Order History page
        element: <OrderHistory />,
      },
    ],
  },
]);

// Main App component renders RouterProvider
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
