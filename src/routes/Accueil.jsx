import { Link, useLoaderData } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useState } from "react";

const Accueil = () => {
  const produits = useLoaderData();
  // console.log(produits)

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  return (
    <main className="min-h-screen py-20 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 w-[90%] md:w-[80%] mx-auto">
        {produits.slice(indexOfFirstPost, indexOfLastPost).map((produit) => (
          <div
            key={produit.id}
            className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-white border rounded-lg shadow-lg"
          >
            <img src={produit.image} alt="" className="w-[50%] h-[50%] " />
            <h2 className="text-[10px] font-bold">{produit.title}</h2>
            <button className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg">
              <Link to={`produit/${produit.id}`}>Voir Produit</Link>
            </button>
          </div>
        ))}
      </div>
      <Pagination
        allPages={produits.length}
        postPerPage={postPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default Accueil;
