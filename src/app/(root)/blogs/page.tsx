const posts = [
  {
    id: "01",
    title: "The Future of Remote Mentorship",
    category: "STRATEGY",
    date: "APR 10",
  },
  {
    id: "02",
    title: "Scaling Your Creative Agency in 2026",
    category: "BUSINESS",
    date: "APR 08",
  },
  {
    id: "03",
    title: "Why Branding is the New Resume",
    category: "DESIGN",
    date: "MAR 29",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#F8F9F7] py-24 px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-7xl text-center mb-24">Journal</h1>

        <div className="space-y-0 border-t border-black/5">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group flex items-center justify-between py-12 border-b border-black/5 hover:bg-white transition-colors px-8 cursor-pointer"
            >
              <div className="flex items-center gap-12">
                <span className="text-[10px] font-black text-black/20 group-hover:text-[#2E7D32]">
                  ({post.id})
                </span>
                <div>
                  <span className="text-[9px] font-black text-[#2E7D32] tracking-widest mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
                    {post.title}
                  </h3>
                </div>
              </div>
              <span className="text-[10px] font-black text-black/40">
                {post.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
