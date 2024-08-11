import Link from 'next/link'
import { supabase } from '../lib/supabase'

export default async function Home() {
  const { data: posts } = await supabase.from('posts').select('*').order('created_at', { ascending: false })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
              <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}