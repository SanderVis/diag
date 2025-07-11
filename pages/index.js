
import Sidebar from '../components/Sidebar'
import Editor from '../components/Editor'
import Searchbar from '../components/Searchbar'

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '1rem' }}>
        <Searchbar />
        <Editor />
      </div>
    </div>
  )
}
