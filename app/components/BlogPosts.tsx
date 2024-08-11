'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import Link from 'next/link'

// 投稿の型を定義
type Post = {
  id: number
  title: string
  content: string
  created_at: string
}

export default function BlogPosts() {
  // 明示的に Post[] 型を指定
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) console.log('error', error)
    else setPosts(data as Post[])  // 明示的に Post[] として型アサーション
  }

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
          <Link href={`/posts/${post.id}`}>
            <span className="text-blue-500 hover:underline">Read more</span>
          </Link>
        </div>
      ))}
    </div>
  )
}