// in src/App.js
import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import { UserList } from './users'
import jsonServerProvider from 'ra-data-json-server'
import { PostList, PostEdit, PostCreate } from './posts'
import PostIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/Group'
import Dashboard from './Dashboard'
import authProvider from './authProvider'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
)

export default App
