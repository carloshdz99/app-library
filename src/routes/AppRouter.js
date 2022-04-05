import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

//tomamos los libros
import BooksComponent from '../components/books/books';
import LoginComponent from '../components/login/login';
import NavbarComponent from '../components/navbar/navbar';
//tomando los usuarios
import UsersComponent from '../components/Users/Users';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<BooksComponent />} />
                <Route path="/users" element={<UsersComponent />} />
                <Route path="/login" element={<LoginComponent />} />
            </Routes>
        </BrowserRouter>
    )
}
