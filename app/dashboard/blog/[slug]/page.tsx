import { PostResponse } from "@/app/lib/posts";
import PostCard from "@/app/components/PostCard";
import Link from "next/link";
async function fetchDetailPost(id: string) {
     const BASE_API = process.env.NEXT_PUBLIC_API_URL;
     const data = await fetch(`${BASE_API}posts/${id}`)
     const post:PostResponse = await data.json();
     return post ;
}

export default async function DetailPage({
    params
}:{
    params: Promise<{slug: string}>
}){
   const {slug} = await params
   const post = await fetchDetailPost(slug);
    return(
        <>
        <PostCard
                    key={post.id}
                    userId={post.id}
                    id={post.id} 
                    title={post.title}
                    body={post.body}
                    />
        <Link href="/dashboard">home</Link>            
        </>
         
    );
}