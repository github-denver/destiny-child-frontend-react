import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Index from './pages/Index'

import Login from './pages/Login'
import Register from './pages/Register'

import GuideList from './pages/guide/List'
import GuideRead from './pages/guide/Read'

import ChildList from './pages/child/List'
import ChildRead from './pages/child/Read'

import BoardList from './pages/board/List'
import BoardRead from './pages/board/Read'
import BoardWrite from './pages/board/Write'

function App() {
  return (
    <div className="App">
      <Route component={Index} path={['/', '/beluga']} exact />

      <Route component={Login} path={['/beluga/member/login']} />
      <Route component={Register} path={['/beluga/member/register']} />

      <Route component={GuideList} path={['/beluga/dictionary/book']} />
      <Route component={GuideRead} path={['/beluga/dictionary/detail/:number']} />

      <Route component={ChildList} path={['/beluga/child/book']} />
      <Route component={ChildRead} path={['/beluga/child/detail/:number']} />

      <Route component={BoardList} path={['/beluga/:service/list', '/beluga/:service/list/:number']} />
      <Route component={BoardRead} path={['/beluga/:service/read/:number']} />
      <Route component={BoardWrite} path={['/beluga/:service/write']} />
    </div>
  )
}

export default App