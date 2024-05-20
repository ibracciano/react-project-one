import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const { cartList } = useSelector((state) => state.cart);

  const [isDarkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  // console.log(theme);

  const navigate = useNavigate();


  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/recherche/${query}`);
  }

  return (
    <header className="fixed z-50 w-full py-2 bg-white shadow-sm dark:bg-slate-950 dark:text-white">
      <nav className="flex items-center justify-between w-[90%] lg:w-[80%] mx-auto">
        {
          !openMenu ? (<RxHamburgerMenu
            className="w-8 h-8 p-1 border-2 rounded-md md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          />) : (<RxCross2
            className="w-8 h-8 p-1 border-2 rounded-md md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          />)
        }


        <Link to="" className="text-xl">
          <span className="w-4 h-4 px-2 py-1 font-bold text-white bg-red-500 rounded-md">
            e
          </span>{" "}
          <span className="font-bold">Shop</span>
        </Link>
        <ul className="hidden gap-5 md:flex">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-white font-bold px-2 py-1 rounded-md"
                  : ""
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="trier"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-white font-bold px-2 py-1 rounded-md"
                  : ""
              }
            >
              Trier
            </NavLink>
          </li>
          <li>
            <NavLink
              to="categorie"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-white font-bold px-2 py-1 rounded-md"
                  : ""
              }
            >
              Categorie
            </NavLink>
          </li>
          <li className="relative">
            <span className="absolute flex items-center justify-center w-5 h-5 px-2 py-1 text-white bg-red-500 rounded-full -right-5 -top-2">
              {cartList.length}
            </span>
            <NavLink
              to="panier"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-white font-bold px-2 py-1 rounded-md"
                  : ""
              }
            >
              Panier
            </NavLink>
          </li>
        </ul>


        {
          openMenu ? (<ul className={`absolute flex w-[90%] justify-between px-5 py-4 border dark:border-none bg-white dark:bg-slate-900 z-30 shadow-md text-[12px] bottom-[-52px]  md:hidden`}>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-white font-bold px-2 py-1 rounded-md"
                    : ""
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="trier"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-white font-bold px-2 py-1 rounded-md"
                    : ""
                }
              >
                Trier
              </NavLink>
            </li>
            <li>
              <NavLink
                to="categorie"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-white font-bold px-2 py-1 rounded-md"
                    : ""
                }
              >
                Categorie
              </NavLink>
            </li>
            <li className="relative">
              <span className="absolute flex items-center justify-center w-5 h-5 px-2 py-1 text-white bg-red-500 rounded-full -right-5 -top-2">
                {cartList.length}
              </span>
              <NavLink
                to="panier"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-500 text-white font-bold px-2 py-1 rounded-md"
                    : ""
                }
              >
                Panier
              </NavLink>
            </li>
          </ul>) : ""
        }

        <form className="hidden md:block w-[30%] border-2 px-2 py-1" onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Recherchez par categorie"
            className="w-full outline-none dark:bg-slate-950"
          />
        </form>


        <DarkModeSwitch
          //   style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onClick={toggleDarkMode}
          size={40}
        />
      </nav>
    </header>
  );
};

export default Header;
