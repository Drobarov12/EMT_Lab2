import './App.css';
import React,{Component} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Books from '../Books/BookList/books';
import Categories from "../Categories/categories";
import Authors from "../Authors/authors"
import Header from "../Header/header";
import BookAdd from"../Books/BookAdd/bookAdd";
import BookService from "../../repository/bookRepository";
import BookEdit from "../Books/BookEdit/bookEdit";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories:[],
            authors:[],
            selectedBook: {}
        }
    }

    render() {
        return(
            // <Books books={this.state.books}/>
            // <Categories categories={this.state.categories}/>
            // <Router>
            //     <Header/>
            //     <main>
            //         <Routes>
            //             <Route path={"/books"} element={<Books books={this.state.books}/>}/>
            //             <Route path={"/categories"} element={<Categories books={this.state.categories}/>}/>
            //             <Navigate to={"/books"}/>
            //         </Routes>
            //
            //     </main>
            // </Router>

                // <Routes>
                //     <Route path={"/"} element={<Books books={this.state.books}/>}/>
                // </Routes>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={
                        <Books books={this.state.books} onDelete={this.deleteBook} onTaken={this.markAsTaken}/>
                    } />
                    <Route path="categories" element={<Categories categories={this.state.categories}/>} />
                    <Route path="authors" element={<Authors authors={this.state.authors}/>} />
                    <Route path="books/add" element={
                        <BookAdd categories={this.state.categories}
                                 authors = {this.state.authors}
                                 onAddBook={this.addBook}/>
                    } />
                    <Route path="books/edit/:id" element={
                        <BookEdit categories={this.state.categories}
                                  authors = {this.state.authors}
                                  onEdit={this.editBook}
                                  book = {this.state.selectedBook}/>
                    } />
                    <Route path="books" element={
                        <Books books={this.state.books}
                               onDelete={this.deleteBook}
                               onTaken={this.markAsTaken}
                               onEdit={this.getBook}/>
                    } />
                </Routes>
            </BrowserRouter>

        );
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }

    loadBooks = () => {
         BookService.fetchBooks()
             .then((data) =>{
                 this.setState({
                     books: data.data
                 })
             });
    }

    loadCategories = () =>{
        BookService.fetchCategories()
            .then((data) =>{
                this.setState({
                    categories:data.data
                })
            })
    }

    loadAuthors = () => {
        BookService.fetchAuthors()
            .then((data) =>{
                this.setState({
                    authors:data.data
                })
            })
    }

    deleteBook = (id) =>{
        BookService.deleteBook(id)
            .then(()=>{
                this.loadBooks();
            })
    }

    markAsTaken = (id) =>{
        BookService.markAsTaken(id)
            .then(() =>{
                this.loadBooks()
            })
    }

    addBook = (name,copies,author,category) => {
        BookService.addBook(name,copies,author,category)
            .then(()=>{
                this.loadBooks();
            })
    }

    getBook = (id) => {
        BookService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook:data.data
                })
            })
    }

    editBook = (id,name,copies,author,category) =>{
        BookService.editBook(id,name,copies,author,category)
            .then(()=>{
                this.loadBooks();
            })
    }


}

export default App;
