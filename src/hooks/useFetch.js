import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  
  useEffect(() => {
    // Abort controller (prevents memory leaks)
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
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
          // Without this catch, state in home component will still be updated causing memory leak
          if(err.name === 'AbortError') {
            console.log('Fetch aborted')
          } else {
            setError(err.message)
            setIsLoading(false)
          }
        })

      
    }, 1000)

    // Clean-up function (trigger event for abort controller)
    return () => abortCont.abort();
  }, [url])

  return {data, isLoading, error}
}

export default useFetch