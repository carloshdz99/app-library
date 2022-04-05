import { baseUrl } from "./config";

//funcion para tomar los libros de la base de datos
export const getBooks = async () => {
    const url = `${baseUrl}/api/v1/mnt-book/getBooks`

    const params = {
        method: "GET",
        headers: {
            "Content-Type": "applicaction/json"
        }
    };

    return await fetch(url, params)
        .then(response => { return response.json() })
        .then(result => { return result })
        .catch(err => { return err })
}

//funcion para tomar los generos de la base de datos
export const getGenres = async () => {
    const url = `${baseUrl}/api/v1/mnt-genre/getGenres`

    const params = {
        method: "GET",
        headers: {
            "Content-Type": "applicaction/json"
        }
    };

    return await fetch(url, params)
        .then(response => { return response.json() })
        .then(result => { return result })
        .catch(err => { return err })
}