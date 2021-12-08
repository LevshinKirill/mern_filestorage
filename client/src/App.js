import { CreateLinkComponent } from './components/CreateLinkComponent'
import { ToastContainer } from 'react-toastify'
import './App.sass'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <div className='App'>
    <ToastContainer />
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <CreateLinkComponent />
    </div>
  </div>
)

export default App
