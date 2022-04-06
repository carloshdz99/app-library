import React from "react";

//haciendo peticiones
import { getBooks } from "../../api/books";

//importando modal
import ModalComponent from "../Modal/Modal";

//formulario para agregar libros
import AddBookFormComponent from "../Forms/AddBookForm/";
import EditBookFormComponent from "../Forms/EditBookForm/";

import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { RiReservedLine } from 'react-icons/ri'

import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const BooksComponent = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);
    const [modalTitle, setModalTitle] = React.useState("");

    const [booksList, setBooksList] = React.useState([])
    const [reloadBooks, setReloadBooks] = React.useState(false)
    React.useEffect(() => {
        getBooks().then(response => {
            if (response) {
                setBooksList(response.books)
            }
        })
        setReloadBooks(false)
    }, [reloadBooks])

    //funcion para abrir modal
    const handleAddBook = () => {
        setModalShow(true)
        setModalTitle('New Book')
        setModalContent(
            <AddBookFormComponent setModalShow={setModalShow} setReloadBooks={setReloadBooks} />
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
                    <button className="btn btn-primary btn-circle"><RiReservedLine /></button>
                    <button className="btn btn-warning btn-circle"><MdEdit /></button>
                    <button className="btn btn-danger btn-circle"><MdDeleteForever /></button>
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
                    <Data booksList={booksList} setModalShow={setModalShow} setModalContent={setModalContent} setModalTitle={setModalTitle} setReloadBooks={setReloadBooks} />
                </div>
            </div>
            <ModalComponent modalShow={modalShow} modalTitle={modalTitle} setModalShow={setModalShow} >
                {modalContent}
            </ModalComponent>
        </>
    )
}

//funcion para mostrar la tabla de registros
const Data = ({ booksList, setModalShow, setModalContent, setModalTitle, setReloadBooks }) => {

    //funcion para editar un libro
    const EditBook = (row) => {
        setModalShow(true)
        setModalTitle(`Edit Book ${row.id}`)
        setModalContent(
            <EditBookFormComponent setModalShow={setModalShow} setReloadBooks={setReloadBooks} bookData={row} />
        )
    }

    //mostrara los botones de acciones
    const ActionButtons = (row) => {
        return (
            <div className="">
                <button className="btn btn-primary btn-circle"><RiReservedLine /></button>
                <button className="btn btn-warning btn-circle" onClick={() => EditBook(row)} ><MdEdit /></button>
                <button className="btn btn-danger btn-circle"><MdDeleteForever /></button>
            </div>
        )
    }

    const columns = [
        {
            name: '#',
            selector: row => row.id,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Author',
            selector: row => row.author
        },
        {
            name: 'Stock',
            selector: row => row.stock
        },
        // {
        //     name: 'Available',
        //     selector: row => row.available
        // },
        {
            name: 'Actions',
            selector: row => <ActionButtons {...row} />
        }
    ];

    const data = booksList.map(data => ({
        ...data
    }));
    const tableData = {
        columns,
        data
    };

    //retornando la tabla
    return (
        <>
            <DataTableExtensions
                {...tableData}
                filterPlaceholder="Buscar"
                export={false}
                print={false}
            >
                <DataTable
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                    width="auto"

                />
            </DataTableExtensions>
            {/* <DataTable
                {...tableData}
            /> */}
        </>
    )
}

export default BooksComponent