import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Trier = () => {
  const navigate = useNavigate();
  const produits = useLoaderData();
  const data = produits.sort((a, b) => a.price - b.price);
  const dataReverse = [...data].reverse();
  // console.log(dataReverse);

  const [state, setState] = useState("");

  function handleCroissant() {
    setState("croissant");
  }

  function handleDeCroissant() {
    setState("decroissant");
  }

  function handleClick(id) {
    navigate(`/produit/${id}`);
  }
  //   console.log(data);
  return (
    <main className="min-h-screen py-20 dark:bg-slate-900">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="flex items-center gap-8 text-[10px] md:text-base dark:text-white">
          <span className="font-bold">Trier par :</span>
          <p className="flex items-center gap-2" onClick={handleCroissant}>
            <span
              className={`w-5 h-5 border-2 rounded-full ${state === "croissant" ? "bg-red-500" : ""
                }`}
            ></span>
            <span>Prix croissant</span>
          </p>

          <p className="flex items-center gap-2" onClick={handleDeCroissant}>
            <span
              className={`w-5 h-5 border-2 rounded-full ${state === "decroissant" ? "bg-red-500" : ""
                }`}
            ></span>
            <span>Prix décroissant</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-3 lg:grid-cols-4">
          {state === "croissant" &&
            data.map((produit) => (
              <div
                key={produit.id}
                className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-white border rounded-lg shadow-lg"
              >
                <img src={produit.image} alt="" className="w-[50%] h-[50%] " />
                <h2 className="text-[10px] font-bold">{produit.title}</h2>
                <button
                  className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg"
                  onClick={() => handleClick(produit.id)}
                >
                  Voir Produit
                </button>
              </div>
            ))}

          {state === "decroissant" &&
            dataReverse.map((produit) => (
              <div
                key={produit.id}
                className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-white border rounded-lg shadow-lg"
              >
                <img src={produit.image} alt="" className="w-[50%] h-[50%] " />
                <h2 className="text-[10px] font-bold">{produit.title}</h2>
                <button
                  className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg"
                  onClick={() => handleClick(produit.id)}
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

export default Trier;
