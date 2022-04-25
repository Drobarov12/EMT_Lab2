import axios from "../custom-axios/axios";

const BookService = {
    fetchBooks: () => {
        return axios.get("/books")
    },
    fetchCategories:() =>{
        return axios.get("/categories")
    },
    fetchAuthors:() =>{
        return axios.get("/authors")
    },
    deleteBook:(id)=>{
        return axios.delete(`/delete/${id}`)
    },
    addBook:(id,name,copies,author,category)=>{
        return axios.post("/add",{
            "id": id,
            "name":name,
            "copies":copies,
            "author":author,
            "category":category
        })
    }
}

export default BookService;