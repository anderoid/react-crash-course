import './App.css';
import './Book.css' ;
import Book from './Book';
import React from "react";
import {books} from './books'

const App = () => {
    return (
        <section className={"booklist"}>{books.map(book => {
            return (
                <Book key={book.id} {...book}/>
            )
        })}</section>
            )
        }

export default App;
