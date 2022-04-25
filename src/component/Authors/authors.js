import React from "react";

const authors = (props) =>{
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <h2>Authors</h2>
                    <table className={"table table-striped"}>
                        <thead>
                            <th scope={"col"}>Authors name</th>
                            <th scope={"col"}>Authors surname</th>
                        </thead>
                        <tbody>
                        {props.authors.map((term) => {
                            return (
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.surname}</td>
                                </tr>

                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default authors;