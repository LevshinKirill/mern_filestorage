import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileCard } from './FileCard'

const Dropzone = ({ setAcceptedFiles }) => {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept } = useDropzone({ maxFiles: 2 })

  useEffect(() => {
    if (setAcceptedFiles) {
      setAcceptedFiles(acceptedFiles)
    }
  }, [acceptedFiles, setAcceptedFiles])

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