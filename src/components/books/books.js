import React from "react";

//haciendo peticiones
import { getBooks } from "../../api/books";

//importando modal
import ModalComponent from "../Modal/Modal";

const BooksComponent = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);
    const [modalTitle, setModalTitle] = React.useState("");

    const [booksList, setBooksList] = React.useState([])
    React.useEffect(() => {
        getBooks().then(response => {
            if (response) {
                setBooksList(response.books)
            }
        })
    }, [])

    //funcion para abrir modal
    const handleAddBook = () => {
        setModalShow(true)
        setModalTitle('New Book')
        setModalContent(
            <h1>contenido de modal</h1>
        )
    }

    //mapenado los libros para mostrarlos en pantalla
    const bookTable = booksList.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.stock}</td>
                <td>{item.id}</td>
                <td>
                    <button className="btn btn-primary btn-rounded">R</button>
                    <button className="btn btn-warning btn-rounded">E</button>
                    <button className="btn btn-danger btn-rounded">D</button>
                </td>
            </tr>
        )
    })

    //retornando 
    return (
        <>
            <div className="card py-3">
                <div className="card-body">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-4">
                                <h5 className="card-title">
                                    Book List
                                </h5>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark" onClick={handleAddBook}>Add new book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mx-3">
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Stock</th>
                                <th>Available</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookTable}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalComponent modalShow={modalShow} modalTitle={modalTitle} setModalShow={setModalShow} >
                {modalContent}
            </ModalComponent>
        </>
    )
}

export default BooksComponent