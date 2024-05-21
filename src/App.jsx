import { Routes, Route} from 'react-router-dom'
import Home from './component/home'
import Login from './component/login'
import Jobs from './component/jobs'
import NotFound from './component/notfound'


const App = () =>

  <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/jobs' element={<Jobs/>}></Route>
    <Route path='/*' element={<NotFound/>}></Route>

  </Routes>




  export default App