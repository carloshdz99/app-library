import React from "react";

import Select from "react-select";

//importando peticiones
import { getGenres, saveBook, updateBook } from "../../../api/books";

import { toastAlert } from "../../../helper/Alerts";

const EditBookFormComponent = ({ setModalShow, setReloadBooks, bookData }) => {

    const [genresList, setGenresList] = React.useState([])
    React.useEffect(() => {
        getGenres().then(response => {
            if (response) {
                setGenresList(response.genres)
            }
        })
    }, [])


    const genreItems = genresList.map(item => {
        return { value: item.id, label: item.name }
    })

    //toma los datos del formulario
    const [form, setForm] = React.useState({});
    React.useEffect(()=>{
        setForm({
            id: bookData.id,
            title: bookData.title,
            author: bookData.author,
            published: bookData.published,
            year: bookData.year,
            stock: bookData.stock,
        })
    },[bookData])

    console.log(bookData.published);


    //tomara los errores
    const [errors, setErrors] = React.useState({})

    //funcion para cambiar el estado
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //funcion para enviar la informacion del formulario
    const handleSubmit = (e) => {
        e.preventDefault()

        let Bandera = false //servira para saber que el formulario se valido bien
        let ObjectoErrores = {}
        setErrors({})
        if (!form.title) {
            ObjectoErrores.title = "required field"
            Bandera = true
        }
        if (!form.author) {
            ObjectoErrores.author = "required field"
            Bandera = true
        }
        if (!form.published) {
            ObjectoErrores.published = "required field"
            Bandera = true
        }
        if (!form.year) {
            ObjectoErrores.year = "required field"
            Bandera = true
        }
        if (!form.stock) {
            ObjectoErrores.stock = "required field"
            Bandera = true
        }
        if (!form.id_genre) {
            ObjectoErrores.id_genre = "required field"
            Bandera = true
        }

        if (Bandera) {
            setErrors(ObjectoErrores)
            toastAlert("error", "Incomplete form")
        } else {
            //enviando informacion a servidor
            updateBook(form).then(response => {
                if (response) {
                    setReloadBooks(true)
                    setModalShow(false)
                    toastAlert('success', 'Updated Book')
                }
            })
        }
    }

    //retornando
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title:</label>
                            <input type="text" name="title" value={form.title} className={errors.title ? "form-control is-invalid" : "form-control"} />
                            {errors.title && (
                                <div className="invalid-feedback">
                                    {errors.title}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Author:</label>
                            <input type="text" name="author" value={form.author} className={errors.author ? "form-control is-invalid" : "form-control"} />
                            {errors.author && (
                                <div className="invalid-feedback">
                                    {errors.author}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Published:</label>
                            <input type="date" name="published" value={form.published} className={errors.published ? "form-control is-invalid" : "form-control"} />
                            {errors.published && (
                                <div className="invalid-feedback">
                                    {errors.published}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Year:</label>
                            <input type="number" name="year" value={form.year} className={errors.year ? "form-control is-invalid" : "form-control"} />
                            {errors.year && (
                                <div className="invalid-feedback">
                                    {errors.year}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Stock:</label>
                            <input type="number" name="stock" value={form.stock} className={errors.stock ? "form-control is-invalid" : "form-control"} readOnly/>
                            {errors.stock && (
                                <div className="invalid-feedback">
                                    {errors.stock}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Genero:</label>
                            <Select
                                className={errors.id_genre && "is-invalid"}
                                options={genreItems}
                                onChange={e => {
                                    setForm({ ...form, id_genre: e.value })
                                }}
                            />
                            {errors.id_genre && (
                                <div className="invalid-feedback">
                                    {errors.id_genre}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-dark">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditBookFormComponent