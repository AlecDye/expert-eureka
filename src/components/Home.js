import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs`)
        .then(res => {
          if(!res.ok) {
            throw Error('Connected to server but could not fetch data from the server!')
          }
          return res.json()
        })
        .then((data) => {
          setBlogs(data)
          setIsLoading(false)
          setError(null)
        })
        // Connection error (user couldn't reach server)
        .catch(err => {
          setError(err.message)
          setIsLoading(false)
        })

      
    }, 1000)
  }, [])

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Fetching blog posts...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  )
}

export default Home