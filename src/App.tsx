import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileShell from "./components/MobileShell";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import Home from "./pages/Home";
import BrandProducts from "./pages/BrandProducts";
import ProductDetail from "./pages/ProductDetail";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/brands/:brandId/products",
    element: (
      <Layout>
        <BrandProducts />
      </Layout>
    ),
  },
  {
    path: "/products",
    element: (
      <Layout>
        <ProductsPage />
      </Layout>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <ProfilePage/>
      </Layout>
    ),
  },
]);

function Layout({ children }: { children: React.ReactNode }) {
  const [tab, setTab] = React.useState<"Event"|"Feed"|"Subscription"|"Recycle">("Event");
  return (
    <MobileShell>
      <div className="h-full flex flex-col bg-white">
        <Header active={tab} onTabChange={setTab} onBell={()=>{}} onCart={()=>{}} />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <TabBar />
      </div>
    </MobileShell>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
