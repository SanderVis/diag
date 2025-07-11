
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function Editor() {
  return (
    <div style={{ marginTop: '1rem' }}>
      <h2>Editor</h2>
      <ReactQuill theme="snow" />
    </div>
  )
}
