// in src/App.js
import PostIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/Group'
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Layout, Resource } from 'react-admin'
import authProvider from './authProvider'
import Dashboard from './Dashboard'
import { MyAppBar } from './MyAppBar'
import { PostCreate, PostEdit, PostList } from './posts'
import { UserList } from './users'

const MyLayout = (props: any) => <Layout {...props} appBar={MyAppBar} />

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
  >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
)

export default App
