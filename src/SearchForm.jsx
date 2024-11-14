import { toast } from 'react-toastify'
import { useGlobalContext } from './contex'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const serachValue = e.target.elements.search.value

    if (!serachValue.trim()) {
      toast.error('Provide request!')
      return
    }
    setSearchTerm(serachValue)
  }
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form
        className='search-from'
        style={{ marginTop: '70px', display: 'flex', justifyContent: 'center' }}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
          style={{ width: '500px' }}
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
