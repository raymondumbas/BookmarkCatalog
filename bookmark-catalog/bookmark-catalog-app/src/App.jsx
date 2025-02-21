import './App.css'
import NewBookmarkForm from './NewBookmarkForm.jsx'
function App() {
  const testLabels = ["restaurants", "movies", "comics"]
  return (
    <>
      <div>
        <NewBookmarkForm category = "eateries" />
      </div>
    </>
  )
}

export default App
