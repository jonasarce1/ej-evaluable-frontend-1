import { FunctionComponent } from "preact";

export const AddForm: FunctionComponent = () => {
    return (
        <form class = "addform" action = "/add" method = "post">
            <h1>ADD POST</h1>
            <input type = "text" name = "name" placeholder = "Title" />
            <input type = "text" name = "author" placeholder= "Author" />
            <textarea name = "desc" placeholder = "Content"></textarea>
            <button type = "submit">Publish</button>
        </form>
    )
}