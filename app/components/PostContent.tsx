'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

type Post = {
  id: number
  title: string
  content: string
  created_at: string
}

export default function PostContent({ id }: { id: string }) {
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    fetchPost()
  }, [id])

  async function fetchPost() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) console.log('error', error)
    else setPost(data as Post)
  }

  if (!post) return <div>Loading...</div>

  return (
    <>
      <h1 className="text-3xl font-bold my-4">{post.title}</h1>
      <p className="text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
      <div className="mt-4">{post.content}</div>
    </>
  )
}