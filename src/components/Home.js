import useFetch from '../hooks/useFetch'
import BlogList from './BlogList'

const Home = () => {
  const { data: blogs, isLoading, error} = useFetch(`http://localhost:8000/blogs`)

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Fetching blog posts...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  )
}

export default Home