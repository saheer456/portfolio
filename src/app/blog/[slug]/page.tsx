import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/app/data/blogs"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Article Not Found — Saheer Khan",
      description: "The requested technical blog post could not be found.",
    }
  }

  return {
    title: `${post.title} — Saheer Khan`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} — Saheer Khan`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Saheer Khan"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Saheer Khan`,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#070707] text-[#ede9e3] flex flex-col font-body selection:bg-gold-dim selection:text-gold">
      {/* Mini Header */}
      <header className="h-[70px] border-b border-white/[.07] bg-black/40 backdrop-blur-md sticky top-0 left-0 w-full flex items-center justify-between px-5 sm:px-8 md:px-12 z-50">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight">
          SK<span className="text-gold">.</span>
        </Link>
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8a8a8a] hover:text-[#ede9e3] transition-colors"
        >
          ← Back to Blogs
        </Link>
      </header>

      {/* Main Blog Area */}
      <main className="flex-1 py-16 px-5 sm:px-8 md:px-12 max-w-3xl mx-auto w-full">
        <article className="w-full">
          {/* Eyebrow / Metadata */}
          <div className="flex items-center gap-3 text-[0.65rem] tracking-[.1em] uppercase text-gold mb-4">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Excerpt Block */}
          <p className="text-[#8a8a8a] text-base md:text-lg leading-relaxed mb-8 italic border-l-2 border-gold pl-4 py-1 bg-white/[0.01]">
            {post.excerpt}
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/[.07] mb-10" />

          {/* Content */}
          <div
            className="text-[#ede9e3] space-y-6 leading-relaxed text-sm sm:text-base
              [&>h3]:font-display [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-gold
              [&>h4]:font-display [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:text-[#ede9e3]
              [&>p]:text-[#8a8a8a] [&>p]:mb-6
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-[#8a8a8a] [&>ul]:mb-6
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:text-[#8a8a8a] [&>ol]:mb-6
              [&>pre]:bg-black/50 [&>pre]:border [&>pre]:border-white/[.07] [&>pre]:p-5 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-6 [&>pre]:font-mono [&>pre]:text-xs [&>pre]:leading-normal
              [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>pre>code]:text-green-400
              [&>table]:w-full [&>table]:border-collapse [&>table]:my-8 [&>table]:text-left
              [&>table_th]:border-b [&>table_th]:border-white/[.14] [&>table_th]:pb-3 [&>table_th]:font-display [&>table_th]:text-xs [&>table_th]:tracking-wider [&>table_th]:uppercase [&>table_th]:text-[#5a5a5a]
              [&>table_td]:border-b [&>table_td]:border-white/[.07] [&>table_td]:py-3 [&>table_td]:text-sm [&>table_td]:text-[#8a8a8a]
              [&>table_strong]:text-gold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Footer Navigation */}
        <div className="w-full h-[1px] bg-white/[.07] my-12" />
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold hover:text-gold-l transition-all"
          >
            ← Back to Home
          </Link>
          <span className="text-xs text-[#5a5a5a]">
            &copy; {new Date().getFullYear()} Saheer Khan
          </span>
        </div>
      </main>
    </div>
  )
}
