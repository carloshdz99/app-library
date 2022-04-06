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

//funcion para crear un nuevo libro
export const saveBook = async (data) => {
    const url = `${baseUrl}/api/v1/mnt-book/store`

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return await fetch(url, params)
        .then(response => { return response.json() })
        .then(result => { return result })
        .catch(err => { return err })
}

//funcion para actualizar un libro
export const updateBook = async (data) => {
    const url = `${baseUrl}/api/v1/mnt-book/updateBook`

    const params = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return await fetch(url, params)
        .then(response => { return response.json() })
        .then(result => { return result })
        .catch(err => { return err })
}