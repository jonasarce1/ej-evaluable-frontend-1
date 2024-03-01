import { FunctionComponent } from "preact";
import { PostModelType } from "../db/PostDB.ts";


export const ViewPost: FunctionComponent<{ post: PostModelType }> = ({ post }) => {
    return (
        <div class = "viewpost">
            <h1>{post.name}</h1>
            <p>by {post.author}, on {post.date}</p>
            <p>{post.desc}</p>
        </div>
    )
}