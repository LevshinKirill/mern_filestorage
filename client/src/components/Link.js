const Link = ({ link, setLink }) => (
  <div className='card shadow-lg'>
    <div className='card-body p-5 d-flex flex-column justify-content-center align-items-center'>
      <h2>Download link</h2>
      <p>The files was shared via mern_filestorage and you can download your files by link</p>
      <p><strong>Link: </strong>{link}</p>
      <button
        className='btn btn-lg btn-primary'
        onClick={() => navigator.clipboard.writeText(link)}>
        Copy link
      </button>
      <button
        className='btn btn-link'
        onClick={() => setLink(null)}>
        Go back
      </button>
    </div>
  </div>
)

export {
  Link
}