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
    markAsTaken:(id)=>{
        return axios.post(`/mark-as-taken/${id}`)
    },
    addBook:(name,copies,author,category)=>{
        return axios.get("/add",{
            "book":{
                "name":name,
                "copies":copies,
                "authorId":author,
                "category":category
            }
        })
    }
}

export default BookService;