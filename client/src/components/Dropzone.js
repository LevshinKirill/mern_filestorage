import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileCard } from './FileCard'
import { toast } from 'react-toastify'

const Dropzone = ({ setAcceptedFiles }) => {
  const maxFileSize = 1024 * 1024 * 50

  const fileSizeValidator = (file) => {
    if (file.size > maxFileSize) {
      return {
        message: `file is larger than ${maxFileSize} bytes`
      }
    }
    return null
  }

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
  } = useDropzone({
    maxFiles: 3,
    validator: fileSizeValidator
  })

  useEffect(() => {
    if (setAcceptedFiles) {
      setAcceptedFiles(acceptedFiles)
    }
  }, [acceptedFiles, setAcceptedFiles])

  useEffect(() => {
    fileRejections.map(({ file, errors }) => (
      errors.forEach(error => {
        toast(`${file.name} - ${error.message}`)
      })))
  }, [fileRejections])

  const acceptedFileItems = acceptedFiles.map(file => (
    <FileCard file={file} key={file.path} />
  ))

  const getBorderColor = () => {
    if (isDragAccept) {
      return '#90ee90'
    }
    if (isDragActive) {
      return '#ff0000'
    }
    return '#cccccc'
  }

  return (
    <div {...getRootProps({ className: 'dropzone' })} style={{ borderColor: getBorderColor() }}>
      <input {...getInputProps()} />
      {!acceptedFileItems.length > 0 &&
        <div className='w-100 h-100 m-0 d-flex justify-content-center align-items-center'>
          <span className='fw-bold'>Drop file here!</span>
        </div>}
      {acceptedFileItems && acceptedFileItems}
    </div>
  )
}

export {
  Dropzone
}