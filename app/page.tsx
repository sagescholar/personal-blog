import BlogPosts from './components/BlogPosts'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">My Blog</h1>
      <BlogPosts />
    </div>
  )
}