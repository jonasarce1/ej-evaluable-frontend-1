import {AddForm} from "../components/AddForm.tsx";
import { FreshContext, Handlers } from "$fresh/server.ts";
import { PostModel } from "../db/PostDB.ts";

export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext) => {
        try{
            const form = await req.formData();

            const data = {
                name: form.get("name"),
                author: form.get("author"),
                desc: form.get("desc")
            };

            //creo un nuevo post con los datos del formulario y la fecha actual
            const post = new PostModel({
                name: data.name,
                author: data.author,
                desc: data.desc,
                date: new Date()
            });

            //guardo el post en la base de datos
            await post.save();

            //redirijo al usuario a la página del post que acaba de crear
            return new Response("", {
                status: 303,
                headers: {
                "Location": "/post/" + post._id,
                }
            })
        }catch(e){
            return new Response(e.message, {
                status:500
            })
        }
    }
}

const Page = () => {
    return (
        <AddForm />
    )
}


export default Page;