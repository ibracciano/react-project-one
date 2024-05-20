import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Categorie = () => {
  const navigate = useNavigate();
  const produits = useLoaderData();
  const [state, setState] = useState("");
  function handleJewelery() {
    setState("jewelery");
  }
  function handleElectronics() {
    setState("electronics");
  }
  function handleMen() {
    setState("men");
  }
  function handleWomen() {
    setState("women");
  }

  function handleNavigate(id) {
    navigate(`/produit/${id}`);
  }
  return (
    <main className="flex min-h-screen py-20 dark:bg-slate-900">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="flex items-center text-[10px] md:text-base">
          <span
            className={`px-2 py-1  border-l-2 cursor-pointer ${state === "jewelery" ? "bg-red-500 text-white " : "bg-gray-300"
              }`}
            onClick={handleJewelery}
          >
            Jewelery
          </span>
          <span
            className={`px-2 py-1 border-l-2 cursor-pointer ${state === "electronics" ? "bg-red-500 text-white " : "bg-gray-300"
              }`}
            onClick={handleElectronics}
          >
            Electronics
          </span>
          <span
            className={`px-2 py-1 border-l-2 cursor-pointer ${state === "men" ? "bg-red-500 text-white " : "bg-gray-300"
              }`}
            onClick={handleMen}
          >
            Men's clothes
          </span>
          <span
            className={`px-2 py-1 border-l-2 cursor-pointer ${state === "women" ? "bg-red-500 text-white " : "bg-gray-300"
              }`}
            onClick={handleWomen}
          >
            Women's clothes
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3 lg:grid-cols-4">
          {state === "jewelery" &&
            produits
              .filter((product) => product.category === "jewelery")
              .map((produit) => (
                <div
                  key={produit.id}
                  className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-white border rounded-lg shadow-lg"
                >
                  <img
                    src={produit.image}
                    alt=""
                    className="w-[50%] h-[100px] "
                  />
                  <h2 className="text-[10px] font-bold">{produit.title}</h2>
                  <button
                    className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg"
                    onClick={() => handleNavigate(produit.id)}
                  >
                    Voir Produit{" "}
                  </button>
                </div>
              ))}

          {state === "electronics" &&
            produits
              .filter((product) => product.category === "electronics")
              .map((produit) => (
                <div
                  key={produit.id}
                  className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-white border rounded-lg shadow-lg"
                >
                  <img src={produit.image} alt="" className="w-[50%] h-[100px]" />
                  <h2 className="text-[10px] font-bold">{produit.title}</h2>
                  <button
                    className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg"
                    onClick={() => handleNavigate(produit.id)}
                  >
                    Voir Produit{" "}
                  </button>
                </div>
              ))}

          {state === "men" &&
            produits
              .filter((product) => product.category === "men's clothing")
              .map((produit) => (
                <div
                  key={produit.id}
                  className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-white border rounded-lg shadow-lg"
                >
                  <img src={produit.image} alt="" className="w-[50%] h-[100px]" />
                  <h2 className="text-[10px] font-bold">{produit.title}</h2>
                  <button
                    className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg"
                    onClick={() => handleNavigate(produit.id)}
                  >
                    Voir Produit{" "}
                  </button>
                </div>
              ))}

          {state === "women" &&
            produits
              .filter((product) => product.category === "women's clothing")
              .map((produit) => (
                <div
                  key={produit.id}
                  className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-white border rounded-lg shadow-lg"
                >
                  <img src={produit.image} alt="" className="w-[50%] h-[100px]" />
                  <h2 className="text-[10px] font-bold">{produit.title}</h2>
                  <button
                    className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg"
                    onClick={() => handleNavigate(produit.id)}
                  >
                    Voir Produit
                  </button>
                </div>
              ))}

          {state === "" && <p className="dark:text-white">Make a selection</p>}
        </div>
      </div>
    </main>
  );
};

export default Categorie;
