const { default: Image } = require("next/image");

export default function Post(post){
    return (
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
    )
}