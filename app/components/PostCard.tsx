import { PostResponse } from "../lib/posts";

export default function PostCard({
    userId = 0,
    id = 0,
    title = "Default title",
    body = "Default description"
}: PostResponse ){
    return(
        // <div>
        //     <h2>title : {title} </h2>
        //     <p>Description : {body} </p>
        //     <span>UserID : {userId} | ID : {id} </span>
        // </div>
        <div className="flex h-[350px] w-full w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl md:flex-row mb-1">
      
      {/* Left Side: Title and Description */}
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-800 capitalize">
            title : <span className="text-indigo-600">{title}</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Description : {body}
          </p>
        </div>
        
        {/* Subtle decorative element for a "postcard" feel */}
        <div className="mt-6 h-1 w-12 rounded-full bg-indigo-100" />
      </div>

      {/* Right Side: Metadata (UserID & ID) */}
      <div className="relative flex w-full flex-col justify-center bg-slate-50 p-6 md:w-1/3 md:p-8">
        {/* Dashed vertical divider for desktop */}
        <div className="absolute inset-y-8 left-0 hidden w-px border-l border-dashed border-slate-300 md:block"></div>
        
        <div className="space-y-4">
          <span className="block text-xs font-semibold uppercase tracking-widest text-slate-400">
            UserID : <span className="text-slate-700 text-5xl">{userId}</span>
          </span>
          <div className="h-px w-full bg-slate-200" />
          <span className="block text-xs font-semibold uppercase tracking-widest text-slate-400">
            ID : <span className="text-slate-700">{id}</span>
          </span>
        </div>

        {/* Mock Stamp Area */}
        <div className="absolute top-6 right-6 hidden h-12 w-10 items-center justify-center rounded border-2 border-dotted border-slate-300 bg-white text-[8px] font-bold text-slate-300 md:flex">
          STAMP
        </div>
      </div>
    </div>
    );
}