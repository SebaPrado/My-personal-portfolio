import "./App.css";
import "./ai chatbot/ai_chatbot.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/views/Layout";
import About from "./Components/views/About";
import NotFound from "./Components/views/NotFound";
import Home from "./Components/views/Home";
import HomeNuevo from "./Components/views/HomeNuevo";
import Home0 from "./Components/views/Home0";
import PastoreoPresicion from "./pastoreo/PastoreoPresicion";
import FramerMotion2 from "./Components/views/FramerMotion2";
import Bizkaia from "./situacion_fiscal_Bizkaia/Bizcaya";

// Páginas de clientes
import AlusurPage from "./clientes/alusur/AlusurPage";
import LosCeibosPage from "./clientes/los-ceibos/LosCeibosPage";

// Detectar subdominio
function getSubdomain() {
  const hostname = window.location.hostname;
  
  // En desarrollo: usar ?cliente=alusur
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    const params = new URLSearchParams(window.location.search);
    return params.get('cliente');
  }
  
  // En producción: extraer subdominio
  // alusur.pradosebastian.tech -> "alusur"
  // www.pradosebastian.tech -> "www"
  // pradosebastian.tech -> "pradosebastian"
  const parts = hostname.split('.');
  if (parts.length >= 3) {
    return parts[0]; // El subdominio
  }
  return null; // Es el dominio principal
}

// Router del portafolio (dominio principal)
const portfolioRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomeNuevo /> },
      { path: "about", element: <About /> },
      { path: "home", element: <Home /> },
      { path: "home0", element: <Home0 /> },
      { path: "pastoreo", element: <PastoreoPresicion /> },
      { path: "biz", element: <Bizkaia /> },
      { path: "fm2", element: <FramerMotion2 /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

// Router de Alusur
const alusurRouter = createBrowserRouter([
  { path: "/", element: <AlusurPage /> },
  { path: "*", element: <NotFound /> },
]);

// Router de Los Ceibos
const losCeibosRouter = createBrowserRouter([
  { path: "/", element: <LosCeibosPage /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  const subdomain = getSubdomain();
  
  // Seleccionar router según subdominio
  if (subdomain === 'alusur') {
    return <RouterProvider router={alusurRouter} />;
  }
  if (subdomain === 'losceibos') {
    return <RouterProvider router={losCeibosRouter} />;
  }
  
  // Por defecto: portafolio
  return <RouterProvider router={portfolioRouter} />;
}

export default App;
