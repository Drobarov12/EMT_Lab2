import React from "react";

const bookTerm = (props) =>{
    return(
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.avalibaleCopies}</td>
            <td scope={"col"}>{props.term.author.name}</td>
            <td scope={"col"}>{props.term.author.surname}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"} onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a></td>
            <td scope={"col"}><button>Edit</button></td>
        </tr>
    );
}

export default bookTerm;