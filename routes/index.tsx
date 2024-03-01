import { useSignal } from "@preact/signals";

//lleva directamente a posts
export const handler = () => {
  return new Response("", {
    status: 307,
    headers: {
      "Location": "/posts"
    }
  })
}