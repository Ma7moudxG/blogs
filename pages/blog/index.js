// pages/blog/index.js
import Head from 'next/head'
import Image from 'next/image'

function getExcerpt(text, wordCount = 25) {
  return text.split(' ').slice(0, wordCount).join(' ') + '...'
}

export default function Blog({ posts }) {
    console.log("posts", posts[1])
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="Preview of our latest blog posts" />
      </Head>
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h1>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={`https://via.placeholder.com/300x200`}
                  alt={`Thumbnail for ${post.title}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600">
                  {getExcerpt(post.body)}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  let posts = await res.json()
  
  posts = posts.slice(0, 10)
  
  return {
    props: {
      posts,
    },
    revalidate: 3600, 
  }
}