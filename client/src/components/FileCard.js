import fileIcon from '../images/icons/file-icon.png'

const FileCard = ({ file }) => (
  <div className='file-card card shadow border-0 mb-2 d-flex flex-row p-2'>
    <div className='d-flex align-items-center justify-content-center m-1'>
      <img src={fileIcon} alt='file-icon' className='file-icon' />
    </div>
    <div className=''>
      <div>{file.path}</div>
      <div><strong>{file.size} bytes</strong></div>
    </div>
  </div>
)

export {
  FileCard
}