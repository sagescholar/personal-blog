import PostContent from '../../components/PostContent'

export default function Post({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4">
      <PostContent id={params.id} />
    </div>
  )
}