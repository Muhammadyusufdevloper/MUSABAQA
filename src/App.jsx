import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import Shop from './pages/shop'
import ForClient from './pages/for-client'
import NoteFound from './pages/note-found'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/for-client/:id" element={<ForClient />} />
          <Route path='shop' element={<Shop />} />
          <Route path='*' element={<NoteFound />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App