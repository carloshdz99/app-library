import { baseUrl } from "./config";

//funcion para tomar los libros de la base de datos
export const getUsers = async () => {
    const url = `${baseUrl}/api/v1/mnt-user/get`

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