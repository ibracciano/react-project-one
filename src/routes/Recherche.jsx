import { useLoaderData, useNavigate } from "react-router-dom"


const Recherche = () => {
    const navigate = useNavigate()
    const produits = useLoaderData()
    // console.log(produits)
    const handleNavigate = (id) => {
        navigate(`/produit/${id}`)
    }

    return (
        <main className="flex items-center justify-center min-h-screen py-16 dark:bg-slate-900">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 w-[80%] mx-auto">
                {produits.map((produit) => (
                    <div
                        key={produit.id}
                        className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-white border rounded-lg shadow-lg"
                    >
                        <img src={produit.image} alt="" className="w-[50%] h-[100px] " />
                        <h2 className="text-[10px] font-bold">{produit.title}</h2>
                        <button className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg"
                            onClick={() => handleNavigate(produit.id)}>
                            Voir Produit
                        </button>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Recherche