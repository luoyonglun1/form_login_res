import { PostResponse } from "../lib/posts";
import PostCard from "../components/PostCard";
import Link from "next/link";



async function fetchPost() {
    const BASE_API = process.env.NEXT_PUBLIC_API_URL;
    const data = await fetch(`${BASE_API}posts`)
    const posts:PostResponse[] = await data.json();
    return posts ;
}

export default async function DashboardPage(){
  
    const posts = await fetchPost();
    return(
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-3.5 bg-black px-4 py-4">
       {
        
        posts.map((post) => (
            
            <>
          <Link href={`/dashboard/blog/${post.id}`}>
           <PostCard
            key={post.id}
            userId={post.id}
            id={post.id} 
            title={post.title}
            body={post.body}
            />
          </Link>
            
          
            </>
            
        )
           
            )
        }
        </div>
    );
}