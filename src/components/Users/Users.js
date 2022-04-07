import React from "react";

import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { getUsers } from "../../api/user";

const UsersComponent = () => {

    const [userList, setUsersList] = React.useState([])
    const [reloadBooks, setReloadBooks] = React.useState(false)
    React.useEffect(() => {
        getUsers().then(response => {
            if (response) {
                setUsersList(response.users)
            }
        })
        setReloadBooks(false)
    }, [reloadBooks])

    //retornando 
    return (
        <>
            <div className="card py-3">
                <div className="card-body">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-4">
                                <h5 className="card-title">
                                    User List
                                </h5>
                            </div>
                            <div className="col-4">
                                {/* <button className="btn btn-dark">Add new book</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mx-3">
                <div className="card-body">
                    <Data userList={userList} />
                </div>
            </div>
        </>
    )
}

const Data = ({ userList }) => {

    const columns = [
        {
            name: '#',
            selector: row => row.id,
        },
        {
            name: 'FirstName',
            selector: row => row.firstname,
        },
        {
            name: 'LastName',
            selector: row => row.lastname
        },
        {
            name: 'Email',
            selector: row => row.email
        },
    ];

    const data = userList.map(data => ({
        ...data
    }));
    const tableData = {
        columns,
        data
    };

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
        </>
    )
}

export default UsersComponent