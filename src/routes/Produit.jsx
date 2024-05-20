import { useSelector, useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addToCart } from "../toolkit/redux";

const Produit = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  // console.log(cart);

  const produit = useLoaderData();
  return (
    <main className="min-h-screen pt-24 dark:bg-slate-900">
      <div className="flex flex-col md:flex-row items-center w-[90%] lg:w-[60%] mx-auto gap-10 bg-gray-200 py-2 px-3 rounded-md">

        <img src={produit.image} alt={produit.image} className="rounded-md w-[60%] md:w-[30%] h-[180px]" />

        <div className="flex flex-col">
          <h2 className="text-xl font-bold">{produit.title}</h2>
          <p className="my-3 text-sm font-medium">{produit.description}</p>
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex gap-4">
              <span className="p-1 font-bold text-white bg-red-500 rounded-sm">
                {produit.price} €
              </span>
              {/* <span className="font-bold">Score : {produit.price}</span> */}
              <span className="p-1 font-bold text-white bg-black rounded-sm">
                {produit.category}
              </span>
            </div>
            <div>
              {cart.cartList.find(item => item.id === produit.id)
                ? (
                  <button className="px-2 py-1 text-white duration-700 bg-red-500 rounded-sm hover:bg-black hover:text-white"
                    onClick={() => dispatch({
                      type: "Cart/removeFromCart",
                      payload: produit
                    })}>
                    Supprimer du Panier
                  </button>
                ) : (
                  <button className="px-2 py-1 duration-700 bg-white rounded-sm hover:bg-black hover:text-white"
                    onClick={() => dispatch(addToCart(produit))}>
                    Ajouter au Panier
                  </button>
                )}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Produit;
