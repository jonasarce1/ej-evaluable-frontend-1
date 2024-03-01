import { FunctionComponent } from "preact";
import { PostModelType } from "../db/PostDB.ts";

export const PostList: FunctionComponent<{ posts: PostModelType[] }> = ({ posts }) => {
    return (
        <div class = "postlist">
            <h1>POSTS</h1>
            <ul>
                {posts.map((post) => (
                    <li key = {post.id}>
                        <a href = {`/post/${post._id}`}>{post.name}</a>
                        <span>, by {post.author}, on {post.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

