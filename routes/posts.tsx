import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { PostModelType, PostModel } from "../db/PostDB.ts";
import { PostList } from "../components/PostList.tsx";

type Data = {
    posts : PostModelType[]
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
        const posts = await PostModel.find();
        return ctx.render({posts});
    }
}

export default function Page (props: PageProps<Data>) {
    return (
        <div>
            <PostList posts = {props.data.posts}/>
        </div>
    )
}