import { useState } from 'react'
import { CreateLink } from './components/CreateLink'
import { ToastContainer } from 'react-toastify'
import './App.sass'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from './components/Link'

const App = () => {
  const [link, setLink] = useState(null)

  return (
    <div className='App' >
      <ToastContainer />
      <div className='d-flex justify-content-center align-items-center vh-100'>
        {!link && <CreateLink setLink={setLink} />}
        {link && <Link link={link} setLink={setLink} />}
      </div>
    </div>
  )
}

export default App
