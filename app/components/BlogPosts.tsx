'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import Link from 'next/link'

export default function BlogPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) console.log('error', error)
    else setPosts(data)
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