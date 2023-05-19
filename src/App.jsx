import { Button } from './components'

function App() {
  return (
    <section className="flex items-center justify-center h-screen w-full">
      <form className="flex flex-col justify-between h-1/2 p-8 bg-white shadow-md rounded-lg w-1/2">
        <h1>Waduh</h1>
        <Button type="submit" variant="primary" size="md">
          Masuk
        </Button>
        <span>Or</span>
        <div className="flex gap-x-8">
          <Button type="button" variant="primary-outline" size="md">
            Primary
          </Button>
          <Button type="button" variant="error-outline" size="md">
            Error
          </Button>
          <Button type="button" variant="warning-outline" size="md">
            Error
          </Button>
        </div>
      </form>
    </section>    
  )
}

export default App
