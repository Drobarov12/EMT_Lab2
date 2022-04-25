import React from "react";
import {useNavigate} from "react-router-dom";

const bookAdd = (props) =>{

    const history = useNavigate();
    const [formData,updateFormData] = React.useState({
        name:"",
        copies:0,
        author:1,
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
        const name = formData.name;
        const copies = formData.copies;
        const author = formData.author;
        const category = formData.category;

        props.onAddBook(name,copies,author,category);
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
                            placeholder="Enter name"
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
                                 placeholder="Enter copies"
                                 onChange={handleChange}
                          />

                  </div>
                  <div>
                     <label>Book author</label>
                      <select name="author" onChange={handleChange}>
                          {props.authors.map((term) =>
                              <option value={term.id}>{term.name}</option>
                          )}
                      </select>

                  </div>
                  <div className={"form-group"}>
                      <label>Book category</label>
                      <select name="category" onChange={handleChange}>
                          {props.categories.map((term) =>
                            <option value={term}>{term}</option>
                          )}
                      </select>
                  </div>
                  <button id="submit" type="submit" className={"btn btn-primary"}>Submit</button>
              </form>
        </div>
      </div>
        </div>
    );
}

export default bookAdd;