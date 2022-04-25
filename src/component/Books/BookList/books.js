import React from "react";
import BookTerm from"../BookTerm/bookTerm"
import {Link} from "react-router-dom";

const books = (props) => {
    return (
      <div className={"container mm-4 mt-5"}>
          <div className={"row"}>
              <div className={"row"}>
                  <table className={"table table-striped"}>
                      <thead>
                          <th scope={"col"}>Name</th>
                          <th scope={"col"}>AvailableCopies</th>
                          <th scope={"col"}>Author Name</th>
                          <th scope={"col"}>Author Surname</th>
                          <th scope={"col"}>Category</th>
                      </thead>
                      <tbody>
                      {props.books.map((term) => {
                          return (
                              <BookTerm term={term} onDelete={props.onDelete} onTaken={props.onTaken} onEdit={props.onEdit}/>
                          )
                      })}
                      </tbody>
                  </table>
              </div>
              <div className={"row"}>
                  <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new Book</Link>
              </div>
          </div>
      </div>
    );
}

export default books;