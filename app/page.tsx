import { supabase } from '../lib/supabase'
import PostCard from './components/PostCard'

// Post型の定義（PostCard.tsxと同じ定義を使用）
type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default async function Home() {
  const { data: posts } = await supabase.from('posts').select('*').order('created_at', { ascending: false })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}