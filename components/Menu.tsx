import { FunctionComponent } from "preact";


type MenuProps = {
    selected: "posts" | "add" | "post"
}

export const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
    return(
        <div class = "menu">
            <a href = "/posts" class = {selected === "posts" ? "selected" : ""}>
                Posts
            </a>
            <a href = "/add" class = {selected === "add" ? "selected" : ""}>
                Add
            </a>
        </div>
    )
}