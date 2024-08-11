import { supabase } from '../../../lib/supabase'

export default async function Post({ params }: { params: { id: string } }) {
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!post) return <div>Post not found</div>

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">{new Date(post.created_at).toLocaleDateString()}</p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  )
}