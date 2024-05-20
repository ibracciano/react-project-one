import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeAll, removeFromCart } from "../toolkit/redux";

const Panier = () => {
  const { total, cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(dispatch);
  return (
    <main className="min-h-screen py-20 dark:bg-slate-950">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col">
        <p className="mb-5 space-x-5 dark:text-white">
          <span>
            Total produit : <strong>{cartList.length}</strong>
          </span>
          <span>
            Prix total : <strong> $ {total.toFixed(2)}</strong>
          </span>
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm text-center md:text-base md:grid-cols-1">
          {cartList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between p-3 bg-white border rounded-lg shadow-lg md:flex-row"
            >
              <img src={item.image} alt="" className="w-[100px] h-[100px]" />
              <p className="my-2 md:my-0">{item.title}</p>
              <p className="mb-2 font-bold md:mb-0">${item.price}</p>
              <button
                className="p-1 bg-red-500 rounded-md"
                onClick={() => dispatch(removeFromCart(item))}
              >
                <MdDelete style={{ color: "white" }} />
              </button>
            </div>
          ))}
        </div>
        {cartList.length > 0 && (
          <button
            className="w-[100%] md:w-[20%] lg:w-[10%] self-end mt-5"
            onClick={() => dispatch(removeAll())}
          >
            <p className="p-2 text-white bg-red-500 rounded-md font-smibold hover:bg-black">
              Clear All
            </p>
          </button>
        )}
      </div>
    </main>
  );
};

export default Panier;
