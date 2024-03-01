import { FunctionComponent } from "preact";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { PostModelType, PostModel } from "../../db/PostDB.ts";

type Data = {
    name: string;
    author: string;
    desc: string;
    date: Date;
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const { id } = ctx.params;
        const post = await PostModel.findById(id);
        if (!post) {
            return new Response("Not found", { status: 404 });
        }

        const renderPost: Data = {
            name: post.name,
            author: post.author,
            date: post.date,
            desc: post.desc
        };
        
        return ctx.render(renderPost);
    }
}

export default function Page(props: PageProps<Data>) {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>by {props.data.author}, on {props.data.date}</p>
            <p>{props.data.desc}</p>
        </div>
    )
}
