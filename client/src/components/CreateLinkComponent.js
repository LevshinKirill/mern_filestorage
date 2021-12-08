import { useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Loader } from './Loader'
import { Dropzone } from './Dropzone'
import createLinkImg from '../images/create-link-img.png'
import { toast } from 'react-toastify'

const CreateLinkComponent = () => {
  const [acceptedFiles, setAcceptedFiles] = useState([])
  const { request, loading } = useHttp()

  const createLinkHandler = async (e) => {
    e.preventDefault()
    try {
      const fetched = await request(`http://localhost:8000/api/link/create`, 'POST', {
        files: acceptedFiles
      }, {})
      if (fetched.message) {
        toast(fetched.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className='card shadow-lg create-link-card'>
      <div className='card-body'>
        <div className='row h-100'>
          <form className='col-xl-6 p-3' onSubmit={createLinkHandler}>
            <Dropzone setAcceptedFiles={setAcceptedFiles} />
            <div className='d-grid gap-2 mt-3'>
              <button className='btn btn-primary btn-large' type='submit'>Upload</button>
            </div>
          </form>
          <div className='col-xl-6 p-3'>
            <h2>Simple, private file sharing</h2>
            <p>The app lets you share files with a link that automatically expries.<strong> To share your files you need drop your files to the drop zone and click to upload button.</strong> </p>
            <img src={createLinkImg} alt='create-link-img' className='w-100 create-link-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  CreateLinkComponent
}