import { FreshContext } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx"
import { Menu } from "../components/Menu.tsx";


const Layout = async (req: Request, ctx: FreshContext) => {
    const Component = ctx.Component;
    const route = ctx.route;
    const page = route.split("/").pop() || "default";
    let selected = page;

    if (page !== "posts" && page !== "add") {
        selected = "post";
    }
    
    return (
        <>
            <Menu selected = {selected as "add" | "posts" | "post"}/>
            <Component/> 
            <Footer/>
        </>
    )
}

export default Layout;