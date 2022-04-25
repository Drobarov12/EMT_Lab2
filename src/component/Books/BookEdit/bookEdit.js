import React from "react";
import {useNavigate} from "react-router-dom";

const BookEdit = (props) =>{
    const history = useNavigate();
    const [formData,updateFormData] = React.useState({
        name:"",
        copies:0,
        author:0,
        category:""
    })

    const handleChange = (e) =>{
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name:props.book.name;
        const copies = formData.copies !== 0 ? formData.copies:props.book.copies;
        const author = formData.author !== 0 ? formData.author:props.book.author.id;
        const category = formData.category !== "" ? formData.category:props.book.category;

        props.onEdit(name,copies,author,category);
        history("/books");
    }

    return (
        <div className={"container"}>
            <div className={"row mt-5"}>
                <div className={"col-md-5 mt-5"}>
                    <form onSubmit={onFormSubmit}>
                        <div>
                            <label htmlFor="name">Book name</label>
                            <input type="text"
                                   className={"form-control"}
                                   id = "name"
                                   name = "name"
                                   required
                                   placeholder={props.book.name}
                                   onChange={handleChange}
                            />

                        </div>
                        <div className={"form-group"}>
                            <label htmlFor="copies">Book available copies</label>
                            <input type="number"
                                   className={"form-control"}
                                   id = "copies"
                                   name = "copies"
                                   required
                                   placeholder={props.book.copies}
                                   onChange={handleChange}
                            />

                        </div>
                        <div>
                            <label>Book author</label>
                            <select name="author" onChange={handleChange}>
                                {props.authors.map((term) =>{
                                    if(props.book.author !== undefined &&
                                    props.book.author.id === term.id)
                                        return <option selected={ props.book.author.id} value={term.id}>{term.name}</option>
                                    else return <option value={term.id}>{term.name}</option>
                                })}
                            </select>

                        </div>
                        <div className={"form-group"}>
                            <label>Book category</label>
                            <select name="category" onChange={handleChange}>
                                {props.categories.map((term) =>{
                                    if(props.book.categories !== undefined &&
                                        props.book.categories === term)
                                        return <option selected={ props.book.categories} value={term}>{term}</option>
                                    else return <option value={term}>{term}</option>
                                })}
                            </select>
                        </div>
                        <button id="submit" type="submit" className={"btn btn-primary"}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookEdit;