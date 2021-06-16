import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('Connected to server but could not fetch data from the server!')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsLoading(false)
          setError(null)
        })
        // Connection error (user couldn't reach server)
        .catch(err => {
          setError(err.message)
          setIsLoading(false)
        })

      
    }, 1000)
  }, [url])

  return {data, isLoading, error}
}

export default useFetch