import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../lib/supabase'

export default function Post() {
  const [post, setPost] = useState(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) fetchPost()
  }, [id])

  async function fetchPost() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) console.log('error', error)
    else setPost(data)
  }

  if (!post) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">{post.title}</h1>
      <p className="text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
      <div className="mt-4">{post.content}</div>
    </div>
  )
}