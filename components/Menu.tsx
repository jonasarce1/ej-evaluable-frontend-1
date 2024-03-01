import { FunctionComponent } from "preact";


type MenuProps = {
    selected: "Posts" | "Add" | ""
}

export const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
    return(
        <div class = "menu">
            <a href = "/posts" class = {selected === "Posts" ? "selected" : ""}>
                Posts
            </a>
            <a href = "/add" class = {selected === "Add" ? "selected" : ""}>
                Add
            </a>
        </div>
    )
}