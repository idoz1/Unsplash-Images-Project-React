import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useGlobalContext } from './contex'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)

      return result.data
    },
  })

  useEffect(() => {
    if (response.isError) {
      toast.error('There was an error...')
    }
    if (response.data?.results?.length < 1) {
      toast.warning('No results found...')
    }
  }, [response.isError, response.data])

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    )
  }

  const results = response.data.results

  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular

        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className='img'
          />
        )
      })}
    </section>
  )
}

export default Gallery
