// rechercher la totalité des poduits disponibles 
export async function allProduct() {
    let api = 'https://fakestoreapi.com/products'
    const response = await fetch(api)
    try {
        // si ok executre toutes les instructions ici
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        // si non il faut me renvoyer une erreur 
        throw new Error(error)
    }


}
export async function singleProduct({ params }) {
    let api = `https://fakestoreapi.com/products/${params.id}`
    const response = await fetch(api)
    try {
        // si ok executre toutes les instructions ici
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        // si non il faut me renvoyer une erreur 
        throw new Error(error)
    }


}
export async function category({ params }) {
    // console.log(params);
    let api = `https://fakestoreapi.com/products/category/${params.category}`
    const response = await fetch(api)
    try {
        // si ok executre toutes les instructions ici
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        // si non il faut me renvoyer une erreur 
        throw new Error(error)
    }


}