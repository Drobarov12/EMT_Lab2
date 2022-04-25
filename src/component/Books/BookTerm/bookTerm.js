import React from "react";

const bookTerm = (props) =>{
    return(
        <tr>
            <td className={"col"}>{props.term.name}</td>
            <td className={"col"}>{props.term.avalibaleCopies}</td>
            <td className={"col"}>{props.term.author.name}</td>
            <td className={"col"}>{props.term.author.surname}</td>
            <td className={"col"}>{props.term.category}</td>
            <td className={"col text-right"}>
                <a title={"MarkAsTaken"} className={"btn btn-primary"} onClick={() => props.onTaken(props.term.id)}>
                    Take
                </a></td>
            <td className={"col text-right"}>
                <a title={"Delete"} className={"btn btn-danger"} onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
            <td className={"col"}><button>Edit</button></td>
        </tr>
    );
}

export default bookTerm;