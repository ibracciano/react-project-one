import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./structure/Layout"
import ErrorPage from "./routes/ErrorPage";
import Accueil from "./routes/Accueil";
import Categorie from "./routes/Categorie";
import Panier from "./routes/Panier";
import Produit from "./routes/Produit";
import Recherche from "./routes/Recherche";
import Trier from "./routes/Trier";
import { allProduct, category, singleProduct } from "./api/ConnectApi";




const App = () => {


  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, errorElement: <ErrorPage />, children: [
        { path: "", element: <Accueil />, loader: allProduct },
        { path: "categorie", element: <Categorie />, loader: allProduct },
        { path: "panier", element: <Panier /> },
        { path: "produit/:id", element: <Produit />, loader: singleProduct },
        { path: "recherche/:category", element: <Recherche />, loader: category },
        { path: "trier", element: <Trier />, loader: allProduct },



      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App