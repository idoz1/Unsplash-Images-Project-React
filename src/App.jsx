import { ToastContainer } from 'react-toastify'
import Gallery from './Gallery'
import SearchForm from './SearchForm'
import ThemeToggle from './ThemeToggle'

const App = () => {
  return (
    <main>
      <ToastContainer position='top-center' />
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
}
export default App
