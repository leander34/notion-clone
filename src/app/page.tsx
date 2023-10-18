import { Editor } from "@/components/Editor";

export default function Home() {
  return (
    <div className="bg-white max-w-[1110px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
      <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
        <div className="flex gap-2 group">
          <button className="w-3 h-3 rounded-full bg-zinc-300  group-hover:bg-red-400 group-hover:animate-pulse"></button>
          <button className="w-3 h-3 rounded-full bg-zinc-300   group-hover:bg-yellow-400 group-hover:animate-pulse"></button>
          <button className="w-3 h-3 rounded-full bg-zinc-300   group-hover:bg-green-400 group-hover:animate-pulse"></button>
        </div>
      </aside>
      <main className="p-4">
        <div className="max-w-[700px] mx-auto pt-16 prose prose-violet">
          <Editor />
        </div>
      </main>
    </div>
  )
}
