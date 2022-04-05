import React from "react";

//importando peticiones
import { getGenres } from "../../../api/books";

const AddBookFormComponent = (props) => {

    const [genresList, setGenresList] = React.useState([])
    React.useEffect(() => {

    }, [])

    //toma los datos del formulario
    const [form, setForm] = React.useState({});

    //funcion para cambiar el estado
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.name
        })
    }

    //funcion para enviar la informacion del formulario
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    //retornando
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <form onChange={handleChange} onSubmit={handleSubmit}>

                    </form>
                </div>
            </div>
        </>
    )
}

export default AddBookFormComponent